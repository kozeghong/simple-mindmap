import React, { FC } from 'react'

import TreeNode from './TreeNode'
import styles from './TreeNode.module.css'

import ConnectionLine from '../components/ConnectionLine'
import Topic from '../components/Topic'
import { INode } from '../layouts/types'

interface IProps {
  rootNode?: INode
}

const TreeRoot: FC<IProps> = ({ rootNode }) => {
  if (rootNode === undefined) {
    return null
  }

  const { children: childNodes = [], title, size, block, position, junction } = rootNode

  return (
    <div className={styles.node} style={{ ...block, left: (position?.x || 0) + 50, top: (position?.y || 0) + 50 }}>
      <div className={styles.container} style={{ ...block }}>
        <Topic title={title} size={size} junction={junction} ></Topic>

        {childNodes.length > 0 ? childNodes.map(node => (
          <ConnectionLine
            containerHeight={block.height}
            containerWidth={block.width}
            key={`connection-${node.id}`}
            startPoint={node.connection.from}
            endPoint={node.connection.to}
          />
        )) : null}

        {childNodes.length > 0 ? childNodes.map(node => (
          <TreeNode
            key={node.id}
            childNodes={node.children}
            block={node.block}
            position={node.position}
            junction={node.junction}
            size={node.size}
          >
            <Topic
              title={node.title}
              junction={node.junction}
              size={node.size}
            />
          </TreeNode>
        )) : null}

      </div>
    </div>
  )
}

export default TreeRoot
