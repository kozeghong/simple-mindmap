import { STRUCTURES, structureMap } from './'
import { IStructure } from './base'
import { IPartialNode, IBlockSize } from '../types'

const marginBottom = 20
const marginHorizontal = 60

const structureName = 'tree-balance'

function generateBlockContext (node: IPartialNode) {
  const nodeWidth = node.size?.width || 0
  const nodeHeight = node.size?.height || 0

  if (node.children === undefined || node.children.length === 0) {
    node.blockSize = {
      width: nodeWidth + marginHorizontal * 2,
      height: nodeHeight,
    }

    node.position = {
      x: 0,
      y: 0,
    }
  } else if (node.children && node.children.length > 0) {
    const nodeChildren = node.children

    const rightBlockSize: IBlockSize = { width: 0, height: 0 }
    const leftBlockSize: IBlockSize = { width: 0, height: 0 }
    let rightIndex = 0
    let leftIndex = nodeChildren.length - 1

    while (rightIndex <= leftIndex) {
      if (leftBlockSize.height >= rightBlockSize.height) {
        const child = nodeChildren[rightIndex]

        structureMap[STRUCTURES.TREE_RIGHT].generateBlockContext(child)

        const childBlockWidth = child.blockSize?.width || 0
        const childBlockHeight = child.blockSize?.height || 0

        rightBlockSize.width = rightBlockSize.width < childBlockWidth ? childBlockWidth : rightBlockSize.width
        rightBlockSize.height += childBlockHeight

        rightIndex++
      } else {
        const child = nodeChildren[leftIndex]

        structureMap[STRUCTURES.TREE_LEFT].generateBlockContext(child)

        const childBlockWidth = child.blockSize?.width || 0
        const childBlockHeight = child.blockSize?.height || 0

        leftBlockSize.width = leftBlockSize.width < childBlockWidth ? childBlockWidth : leftBlockSize.width
        leftBlockSize.height += childBlockHeight

        leftIndex--
      }
    }

    rightBlockSize.height += marginBottom * (rightIndex - 1)
    leftBlockSize.height += marginBottom * (nodeChildren.length - rightIndex - 1)

    const sumHeight = Math.max(rightBlockSize.height, leftBlockSize.height, nodeHeight)
    const sumWidth = nodeWidth + rightBlockSize.width + leftBlockSize.width + marginHorizontal * 2

    node.blockSize = {
      width: sumWidth,
      height: sumHeight,
    }

    node.position = {
      x: leftBlockSize.width + marginHorizontal,
      y: (sumHeight - nodeHeight) / 2,
    }

    /** layout the right tree nodes */
    let rightSideTop = (sumHeight - rightBlockSize.height) / 2
    const rightSideLeft = node.position.x + nodeWidth + marginHorizontal

    nodeChildren.slice(0, rightIndex).forEach(child => {
      const childBlockHeight = child.blockSize?.height || 0

      child.blockPosition = {
        x: rightSideLeft,
        y: rightSideTop,
      }

      rightSideTop += childBlockHeight + marginBottom

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

    /** layout the left tree nodes */
    let leftSideTop = (sumHeight - leftBlockSize.height) / 2
    const leftSideLeft = sumWidth - nodeWidth - marginHorizontal * 2 - rightBlockSize.width

    nodeChildren.slice(rightIndex).reverse().forEach(child => {
      const childBlockWidth = child.blockSize?.width || 0
      const childBlockHeight = child.blockSize?.height || 0

      child.blockPosition = {
        x: leftSideLeft - childBlockWidth,
        y: leftSideTop,
      }

      leftSideTop += childBlockHeight + marginBottom

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

const treeBalance: IStructure = {
  structureName,
  generateBlockContext,
}

export default treeBalance
