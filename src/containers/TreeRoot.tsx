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

  const { children: childNodes = [], title } = rootNode

  return (
    <div>
      <Topic title={title}></Topic>
      <div>
        {childNodes.length > 0 ? childNodes.map(node => (
          <TreeNode key={node.id} childNodes={node.children}>
            <Topic title={node.title}></Topic>
          </TreeNode>
        )) : null}
      </div>
    </div>
  )
}

export default TreeRoot
