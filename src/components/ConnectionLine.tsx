import React, { FC, useRef, useEffect } from 'react'

import styles from './ConnectionLine.module.css'

interface IPoint {
  x: number
  y: number
}

interface IProps {
  containerWidth: number
  containerHeight: number
  startPoint: IPoint
  endPoint: IPoint
}

function draw (canvas: any, startPoint: IPoint, endPoint: IPoint) {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    ctx.strokeStyle = '#ccc'
    ctx.lineWidth = 2
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'

    ctx.beginPath()
    ctx.moveTo(startPoint.x, startPoint.y)
    // ctx.lineTo(endPoint.x, endPoint.y)
    ctx.bezierCurveTo(startPoint.x + 60, startPoint.y, endPoint.x - 60, endPoint.y, endPoint.x, endPoint.y)
    ctx.stroke()
  }
}

const ConnectionLine: FC<IProps> = (props) => {
  const { startPoint, endPoint, containerWidth, containerHeight } = props
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current && startPoint && endPoint) {
      draw(canvasRef.current, startPoint, endPoint)
    }
  }, [endPoint, startPoint])

  return (
    <div
      className={styles.connectionLine}
      style={{ height: '100%', width: '100%' }}
      start-x={startPoint.x}
      start-y={startPoint.y}
      end-x={endPoint.x}
      end-y={endPoint.y}
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
