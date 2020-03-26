import React, { FC, useRef, useEffect } from 'react'

import styles from './ConnectionLine.module.css'

import { IConnection, IConnectionType } from '../layouts/types'

interface IProps {
  containerWidth: number
  containerHeight: number
  connections: IConnection[]
  connectionType: IConnectionType
}

const drawPolyline = (ctx: any, connection: IConnection) => {
  const { from, to, direction } = connection

  ctx.beginPath()
  ctx.moveTo(from.x, from.y)

  if (direction === 'left') {
    ctx.lineTo(from.x - 30, from.y)
    ctx.lineTo(from.x - 30, to.y)
  } else if (direction === 'right') {
    ctx.lineTo(from.x + 30, from.y)
    ctx.lineTo(from.x + 30, to.y)
  }

  ctx.lineTo(to.x, to.y)
  ctx.stroke()
}

const drawStraight = (ctx: any, connection: IConnection) => {
  const { from, to } = connection

  ctx.beginPath()
  ctx.moveTo(from.x, from.y)
  ctx.lineTo(to.x, to.y)
  ctx.stroke()
}

const drawCurve = (ctx: any, connection: IConnection) => {
  const { from, to, direction } = connection

  ctx.beginPath()
  ctx.moveTo(from.x, from.y)

  if (direction === 'left') {
    ctx.bezierCurveTo(from.x - 30, from.y, to.x + 30, to.y, to.x, to.y)
  } else if (direction === 'right') {
    ctx.bezierCurveTo(from.x + 30, from.y, to.x - 30, to.y, to.x, to.y)
  }
  ctx.stroke()
}

function draw (canvas: any, connections: IConnection[], connectionType: IConnectionType) {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = '#ccc'
    ctx.lineWidth = 2
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'

    for (const connection of connections) {
      if (connectionType === IConnectionType.CURVE) {
        drawCurve(ctx, connection)
      } else if (connectionType === IConnectionType.STRAIGHT) {
        drawStraight(ctx, connection)
      } else if (connectionType === IConnectionType.POLYLINE) {
        drawPolyline(ctx, connection)
      }
    }
  }
}

const ConnectionLine: FC<IProps> = (props) => {
  const { connections, containerWidth, containerHeight, connectionType } = props
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current && connections && connections.length > 0) {
      draw(canvasRef.current, connections, connectionType)
    }
  }, [connectionType, connections])

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
