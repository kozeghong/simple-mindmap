import { IPartialNode } from '../types'

const marginBottom = 20
const marginRight = 60

export function calcBlockSizeAndChildPosition (node: IPartialNode) {
  const nodeWidth = node.size?.width || 0
  const nodeHeight = node.size?.height || 0

  if (node.children === undefined || node.children.length === 0) {
    node.blockSize = {
      width: nodeWidth + marginRight,
      height: nodeHeight,
    }

    node.position = {
      x: 0,
      y: 0,
    }
  } else if (node.children && node.children.length > 0) {
    let sumWidth = 0
    let sumHeight = 0

    let top = 0
    const left = nodeWidth + marginRight

    node.children.forEach(child => {
      calcBlockSizeAndChildPosition(child)

      const childBlockWidth = child.blockSize?.width || 0
      const childBlockHeight = child.blockSize?.height || 0

      child.blockPosition = {
        x: left,
        y: top,
      }

      top += childBlockHeight + marginBottom

      sumWidth = sumWidth < childBlockWidth ? childBlockWidth : sumWidth
      sumHeight += childBlockHeight
    })

    sumWidth += nodeWidth + marginRight
    sumHeight += marginBottom * (node.children.length - 1)

    node.blockSize = {
      width: sumWidth,
      height: sumHeight,
    }

    node.position = {
      x: 0,
      y: (sumHeight - nodeHeight) / 2,
    }

    node.children.forEach(child => {
      child.connection = {
        from: {
          x: (node.position?.x || 0) + nodeWidth,
          y: (node.position?.y || 0) + nodeHeight / 2,
        },
        to: {
          x: (child.position?.x || 0),
          y: (child.position?.y || 0) + (child.size?.height || 0) / 2,
        },
      }
    })
  }
}
