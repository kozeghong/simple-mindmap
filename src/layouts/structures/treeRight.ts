import { IPartialNode } from '../types'

const marginBottom = 20
const marginRight = 60

export function calcBlockSizeAndChildPosition (node: IPartialNode) {
  const nodeWidth = node.size?.width || 0
  const nodeHeight = node.size?.height || 0

  if (node.children === undefined || node.children.length === 0) {
    node.block = {
      width: nodeWidth + marginRight,
      height: nodeHeight,
    }

    node.junction = {
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

      const childBlockWidth = child.block?.width || 0
      const childBlockHeight = child.block?.height || 0

      child.position = {
        x: left,
        y: top,
      }

      top += childBlockHeight + marginBottom

      sumWidth = sumWidth < childBlockWidth ? childBlockWidth : sumWidth
      sumHeight += childBlockHeight
    })

    sumWidth += nodeWidth + marginRight
    sumHeight += marginBottom * (node.children.length - 1)

    node.block = {
      width: sumWidth,
      height: sumHeight,
    }

    node.junction = {
      x: 0,
      y: (sumHeight - nodeHeight) / 2,
    }

    node.children.forEach(child => {
      child.connection = {
        from: {
          x: (node.junction?.x || 0) + nodeWidth,
          y: (node.junction?.y || 0) + nodeHeight / 2,
        },
        to: {
          x: (child.position?.x || 0) + (child.junction?.x || 0),
          y: (child.position?.y || 0) + (child.junction?.y || 0) + (child.size?.height || 0) / 2,
        },
      }
    })
  }
}
