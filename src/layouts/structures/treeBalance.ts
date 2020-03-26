import { STRUCTURES, structureMap } from './'
import { IStructure } from './base'
import { IPartialNode } from '../types'

const marginBottom = 20
const marginHorizontal = 60

const structureName = 'tree-balance'

function generateChildBlockSize (children: IPartialNode[], structureName: string) {
  let sumWidth = 0
  let sumHeight = 0

  children.forEach(child => {
    structureMap[structureName].generateBlockContext(child)

    const childBlockWidth = child.blockSize?.width || 0
    const childBlockHeight = child.blockSize?.height || 0

    sumWidth = sumWidth < childBlockWidth ? childBlockWidth : sumWidth
    sumHeight += childBlockHeight
  })

  // sumWidth += nodeWidth + marginHorizontal * 2

  sumHeight += marginBottom * (children.length - 1)

  return {
    width: sumWidth,
    height: sumHeight,
  }
}

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

    /** find the middle and split the children */
    const allRightHeight = generateChildBlockSize(nodeChildren, STRUCTURES.TREE_RIGHT).height
    const avgHeight = allRightHeight / 2
    let middleIndex = -1
    let rightSideTreeHeight = 0

    while (rightSideTreeHeight < avgHeight) {
      middleIndex++
      const childHeight = nodeChildren[middleIndex].blockSize?.height || 0
      rightSideTreeHeight += childHeight + marginBottom
    }
    middleIndex++

    const rightSumBlockSize = generateChildBlockSize(nodeChildren.slice(0, middleIndex), STRUCTURES.TREE_RIGHT)
    const leftSumBlockSize = generateChildBlockSize(nodeChildren.slice(middleIndex), STRUCTURES.TREE_LEFT)

    const sumHeight = Math.max(rightSumBlockSize.height, leftSumBlockSize.height, nodeHeight)
    const sumWidth = nodeWidth + rightSumBlockSize.width + leftSumBlockSize.width + marginHorizontal * 2

    node.blockSize = {
      width: sumWidth,
      height: sumHeight,
    }

    node.position = {
      x: leftSumBlockSize.width + marginHorizontal,
      y: (sumHeight - nodeHeight) / 2,
    }

    /** layout the right tree nodes */
    let rightSideTop = (sumHeight - rightSumBlockSize.height) / 2
    const rightSideLeft = node.position.x + nodeWidth + marginHorizontal

    nodeChildren.slice(0, middleIndex).forEach(child => {
      const childBlockHeight = child.blockSize?.height || 0

      child.blockPosition = {
        x: rightSideLeft,
        y: rightSideTop,
      }

      rightSideTop += childBlockHeight + marginBottom

      child.connection = {
        direction: 'right',
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
    let leftSideTop = (sumHeight - leftSumBlockSize.height) / 2
    const leftSideLeft = sumWidth - nodeWidth - marginHorizontal * 2 - rightSumBlockSize.width

    nodeChildren.slice(middleIndex).reverse().forEach(child => {
      const childBlockWidth = child.blockSize?.width || 0
      const childBlockHeight = child.blockSize?.height || 0

      child.blockPosition = {
        x: leftSideLeft - childBlockWidth,
        y: leftSideTop,
      }

      leftSideTop += childBlockHeight + marginBottom

      child.connection = {
        direction: 'left',
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
