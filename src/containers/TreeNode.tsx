import React, { FC } from 'react'

import styles from './TreeNode.module.css'

import Topic from '../components/Topic'
import ConnectionLine from '../components/ConnectionLine'
import { INode, IBlock, IPosition, IJunction, ISize } from '../layouts/types'

interface IProps {
  childNodes?: INode[]
  block: IBlock
  position: IPosition
  junction: IJunction
  size: ISize
}

const TreeNode: FC<IProps> = (props) => {
  const { childNodes = [], children, block, position } = props

  return (
    <div className={styles.node} style={{ ...block, top: position.y, left: position.x }}>
      <div className={styles.container} style={{ ...block }}>

        {children}

        {childNodes.length > 0 ? (
          <ConnectionLine
            containerHeight={block.height}
            containerWidth={block.width}
            connections={childNodes.map(node => node.connection)}
          />
        ) : null}

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

export default TreeNode
