import React, { FC, useRef, useEffect } from 'react'

import styles from './ConnectionLine.module.css'

import { IConnection } from '../layouts/types'

interface IProps {
  containerWidth: number
  containerHeight: number
  connections: IConnection[]
}

function draw (canvas: any, connections: IConnection[]) {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (const { from, to, direction } of connections) {
      ctx.strokeStyle = '#ccc'
      ctx.lineWidth = 2
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'

      ctx.beginPath()
      ctx.moveTo(from.x, from.y)
      // ctx.lineTo(to.x, to.y)

      if (direction === 'left') {
        ctx.bezierCurveTo(from.x - 30, from.y, to.x + 30, to.y, to.x, to.y)
      } else if (direction === 'right') {
        ctx.bezierCurveTo(from.x + 30, from.y, to.x - 30, to.y, to.x, to.y)
      }

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
    <canvas
      className={styles.connectionLine}
      width={containerWidth}
      height={containerHeight}
      ref={canvasRef}
    ></canvas>
  )
}

export default ConnectionLine
