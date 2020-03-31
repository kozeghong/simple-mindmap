import { structureMap } from './'
import { IStructure } from './base'
import { IPartialNode } from '../types'

const marginBottom = 20
const marginLeft = 60

const structureName = 'tree-left'

function generateBlockContext (node: IPartialNode) {
  const nodeWidth = node.size?.width || 0
  const nodeHeight = node.size?.height || 0

  if (node.children === undefined || node.children.length === 0) {
    node.blockSize = {
      width: marginLeft + nodeWidth,
      height: nodeHeight,
    }

    node.position = {
      x: marginLeft,
      y: 0,
    }
  } else if (node.children && node.children.length > 0) {
    let sumWidth = 0
    let sumHeight = 0

    node.children.forEach(child => {
      if (node.structure && structureMap[node.structure]) {
        structureMap[node.structure].generateBlockContext(child)
      } else {
        generateBlockContext(child)
      }

      const childBlockWidth = child.blockSize?.width || 0
      const childBlockHeight = child.blockSize?.height || 0

      sumWidth = sumWidth < childBlockWidth ? childBlockWidth : sumWidth
      sumHeight += childBlockHeight
    })

    sumWidth += marginLeft + nodeWidth

    sumHeight += marginBottom * (node.children.length - 1)
    sumHeight = sumHeight < nodeHeight ? nodeHeight : sumHeight

    node.blockSize = {
      width: sumWidth,
      height: sumHeight,
    }

    node.position = {
      x: sumWidth - nodeWidth,
      y: (sumHeight - nodeHeight) / 2,
    }

    let top = 0
    const left = sumWidth - nodeWidth - marginLeft

    node.children.forEach(child => {
      const childBlockWidth = child.blockSize?.width || 0
      const childBlockHeight = child.blockSize?.height || 0

      child.blockPosition = {
        x: left - childBlockWidth,
        y: top,
      }

      top += childBlockHeight + marginBottom

      child.connection = {
        from: {
          x: (node.position?.x || 0),
          y: (node.position?.y || 0) + nodeHeight / 2,
        },
        to: {
          x: (child.position?.x || 0) + (child.size?.width || 0),
          y: (child.position?.y || 0) + (child.size?.height || 0) / 2,
        },
      }
    })
  }
}

const treeLeft: IStructure = {
  structureName,
  generateBlockContext,
}

export default treeLeft
