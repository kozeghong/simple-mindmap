import React, { FC } from 'react'

// import styles from './TreeNode.module.css'

import Topic from '../components/Topic'
import { INode, IBlockSize, IBlockPosition, IPosition, ISize } from '../layouts/types'

interface IProps {
  childNodes?: INode[]
  blockSize: IBlockSize
  blockPosition: IBlockPosition
  position: IPosition
  size: ISize
}

const TreeNode: FC<IProps> = (props) => {
  // const { childNodes = [], children, blockSize, blockPosition } = props
  const { childNodes = [], children } = props

  return (
    <>
      {/* <div className={styles.node} style={{ ...blockSize, top: blockPosition.y, left: blockPosition.x }}> */}
      {/* <div className={styles.container} style={{ ...blockSize }}> */}
      {children}

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

export default TreeNode
