import { IPartialNode } from '../types'

const marginBottom = 20
const marginLeft = 60

export function calcBlockSizeAndChildPosition (node: IPartialNode) {
  const nodeWidth = node.size?.width || 0
  const nodeHeight = node.size?.height || 0

  if (node.children === undefined || node.children.length === 0) {
    node.block = {
      width: marginLeft + nodeWidth,
      height: nodeHeight,
    }

    node.junction = {
      x: marginLeft,
      y: 0,
    }
  } else if (node.children && node.children.length > 0) {
    let sumWidth = 0
    let sumHeight = 0

    node.children.forEach(child => {
      calcBlockSizeAndChildPosition(child)

      const childBlockWidth = child.block?.width || 0
      const childBlockHeight = child.block?.height || 0

      sumWidth = sumWidth < childBlockWidth ? childBlockWidth : sumWidth
      sumHeight += childBlockHeight
    })

    sumWidth += marginLeft + nodeWidth
    sumHeight += marginBottom * (node.children.length - 1)

    node.block = {
      width: sumWidth,
      height: sumHeight,
    }

    node.junction = {
      x: sumWidth - nodeWidth,
      y: (sumHeight - nodeHeight) / 2,
    }

    let top = 0
    const left = sumWidth - nodeWidth - marginLeft

    node.children.forEach(child => {
      const childBlockWidth = child.block?.width || 0
      const childBlockHeight = child.block?.height || 0

      child.position = {
        x: left - childBlockWidth,
        y: top,
      }

      top += childBlockHeight + marginBottom

      child.connection = {
        from: {
          x: (child.position?.x || 0) + (child.junction?.x || 0) + (child.size?.width || 0),
          y: (child.position?.y || 0) + (child.junction?.y || 0) + (child.size?.height || 0) / 2,
        },
        to: {
          x: (node.junction?.x || 0),
          y: (node.junction?.y || 0) + nodeHeight / 2,
        },
      }
    })
  }
}
