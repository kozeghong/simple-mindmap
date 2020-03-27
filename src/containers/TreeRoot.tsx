import React, { FC } from 'react'

import TreeNode from './TreeNode'

import Topic from '../components/Topic'
import { INode } from '../layouts/types'

interface IProps {
  rootNode?: INode
}

const TreeRoot: FC<IProps> = ({ rootNode }) => {
  if (rootNode === undefined) {
    return null
  }

  const { children: childNodes = [], title, size, position } = rootNode

  return (
    <>
      <Topic
        title={title}
        size={size}
        position={position}
        className='central'
      />

      {childNodes.length > 0 ? childNodes.map(node => (
        <TreeNode
          key={node.id}
          childNodes={node.children}
          blockSize={node.blockSize}
          blockPosition={node.blockPosition}
          position={node.position}
          size={node.size}
        >
          <Topic
            title={node.title}
            position={node.position}
            size={node.size}
            className='main'
          />
        </TreeNode>
      )) : null}

    </>
  )
}

export default TreeRoot
