import React, { FC } from 'react'

import TreeRoot from './TreeRoot'
import styles from './Board.module.css'

import ConnectionLine from '../components/ConnectionLine'
import { generateMindMapData } from '../layouts'
import { IMindMap } from '../layouts/types'

interface IProps {
  source?: string
}

const Board: FC<IProps> = (props) => {
  const { source } = props

  if (source === undefined) {
    return null
  }

  const data: IMindMap = generateMindMapData(source)

  const { root, connections } = data

  console.log(connections)

  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        { connections ? (
          <ConnectionLine
            containerHeight={root.blockSize.height}
            containerWidth={root.blockSize.width}
            connections={connections}
          />
        ) : null}
        <TreeRoot rootNode={root} />
      </div>
    </div>
  )
}

export default Board
