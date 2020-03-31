import { IPartialNode, IBlockPosition } from './types'

export function convertRelativeToAbsolutePosition (node: IPartialNode, parentPosition?: IBlockPosition) {
  const parentX = parentPosition?.x || 0
  const parentY = parentPosition?.y || 0

  node.blockPosition = {
    x: (node.blockPosition?.x || 0) + parentX,
    y: (node.blockPosition?.y || 0) + parentY,
  }

  node.position = {
    x: node.blockPosition.x + (node.position?.x || 0),
    y: node.blockPosition.y + (node.position?.y || 0),
  }

  node.connection = {
    from: {
      x: parentX + (node.connection?.from.x || 0),
      y: parentY + (node.connection?.from.y || 0),
    },
    to: {
      x: node.blockPosition.x + (node.connection?.to.x || 0),
      y: node.blockPosition.y + (node.connection?.to.y || 0),
    },
  }

  node.children && node.children.forEach(child => convertRelativeToAbsolutePosition(child, node.blockPosition))
}
