import React, { FC } from 'react'

import TreeNode from './TreeNode'
// import styles from './TreeNode.module.css'

import Topic from '../components/Topic'
import { INode } from '../layouts/types'

interface IProps {
  rootNode?: INode
}

const TreeRoot: FC<IProps> = ({ rootNode }) => {
  if (rootNode === undefined) {
    return null
  }

  // const { children: childNodes = [], title, size, blockSize, blockPosition, position } = rootNode
  const { children: childNodes = [], title, size, position } = rootNode

  return (
    <>
      {/* <div className={styles.node} style={{ ...blockSize, left: (blockPosition?.x || 0) + 50, top: (blockPosition?.y || 0) + 50 }}> */}
      {/* <div className={styles.container} style={{ ...blockSize }}> */}
      <Topic title={title} size={size} position={position} ></Topic>

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
          />
        </TreeNode>
      )) : null}

      {/* </div> */}
      {/* </div> */}
    </>
  )
}

export default TreeRoot
