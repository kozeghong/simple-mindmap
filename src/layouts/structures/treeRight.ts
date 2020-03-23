import { IPartialNode } from '../types'

const marginBottom = 20
const marginRight = 60

export function calcBlockSizeAndChildPosition (node: IPartialNode) {
  if (node.children && node.children.length > 0) {
    let sumWidth = 0
    let sumHeight = 0

    let top = 0
    const left = (node.size?.width || 0) + marginRight

    node.children.forEach(child => {
      calcBlockSizeAndChildPosition(child)
      const { width, height } = child.block || {}

      child.position = {
        x: left,
        y: top,
      }

      top += (height || 0) + marginBottom

      if (sumWidth < (width || 0)) {
        sumWidth = width || 0
      }

      sumHeight += height || 0
    })

    sumWidth += (node.size?.width || 0) + marginRight
    sumHeight += marginBottom * (node.children.length - 1)

    node.block = {
      width: sumWidth,
      height: sumHeight,
    }

    node.junction = {
      x: 0,
      y: (sumHeight - (node.size?.height || 0)) / 2,
    }

    node.children.forEach(child => {
      child.connection = {
        from: {
          x: (node.junction?.x || 0) + (node.size?.width || 0),
          y: (node.junction?.y || 0) + (node.size?.height || 0) / 2,
        },
        to: {
          x: (child.position?.x || 0) + (child.junction?.x || 0),
          y: (child.position?.y || 0) + (child.junction?.y || 0) + (child.size?.height || 0) / 2,
        },
      }
    })
  } else {
    node.block = {
      width: (node.size?.width || 0) + marginRight,
      height: node.size?.height || 0,
    }
    node.junction = {
      x: 0,
      y: 0,
    }
  }
}
