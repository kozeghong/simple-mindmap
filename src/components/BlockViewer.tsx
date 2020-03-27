import React, { FC, useRef, useEffect } from 'react'

import { INode } from '../layouts/types'

interface IProps {
  containerWidth: number
  containerHeight: number
  root: INode
}

function draw (canvas: HTMLCanvasElement, nodes: INode[]) {
  const ctx = canvas.getContext('2d')

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = '#000099'
    ctx.lineWidth = 1
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'

    for (const { blockSize, blockPosition } of nodes) {
      ctx.strokeRect(blockPosition.x, blockPosition.y, blockSize.width, blockSize.height)
    }
  }
}

const collectNodes = (node: INode, collection: INode[]) => {
  collection.push(node)
  node.children && node.children.forEach(child => collectNodes(child, collection))
}

const ConnectionLine: FC<IProps> = (props) => {
  const { root, containerWidth, containerHeight } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current && root) {
      const nodes: INode[] = []
      collectNodes(root, nodes)
      draw(canvasRef.current, nodes)
    }
  }, [root])

  return (
    <canvas
      style={{ position: 'absolute' }}
      width={containerWidth}
      height={containerHeight}
      ref={canvasRef}
    ></canvas>
  )
}

export default ConnectionLine
