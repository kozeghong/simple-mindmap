import React, { FC, useRef, useEffect } from 'react'

import styles from './ConnectionLine.module.css'

interface IPoint {
  x: number
  y: number
}

interface IConection {
  from: IPoint
  to: IPoint
}

interface IProps {
  containerWidth: number
  containerHeight: number
  connections: IConection[]
}

function draw (canvas: any, connections: IConection[]) {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    for (const { from, to } of connections) {
      ctx.strokeStyle = '#ccc'
      ctx.lineWidth = 2
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'

      ctx.beginPath()
      ctx.moveTo(from.x, from.y)
      // ctx.lineTo(to.x, to.y)
      ctx.bezierCurveTo(from.x + 30, from.y, to.x - 30, to.y, to.x, to.y)
      ctx.stroke()
    }
  }
}

const ConnectionLine: FC<IProps> = (props) => {
  const { connections, containerWidth, containerHeight } = props
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current && connections && connections.length > 0) {
      draw(canvasRef.current, connections)
    }
  }, [connections])

  return (
    <div
      className={styles.connectionLine}
      style={{ height: '100%', width: '100%' }}
    >
      <canvas
        style={{ height: '100%', width: '100%' }}
        width={containerWidth}
        height={containerHeight}
        ref={canvasRef}
      ></canvas>
    </div>
  )
}

export default ConnectionLine
