import React, { FC } from 'react'

import Topic from '../components/Topic'
import { INode } from '../layouts/types'

interface IProps {
  childNodes?: INode[]
}

const TreeNode: FC<IProps> = ({ childNodes = [], children }) => {
  return (
    <div>
      {children}
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

export default TreeNode
