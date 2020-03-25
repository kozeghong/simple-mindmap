import React, { FC, useMemo } from 'react'

import TreeRoot from './TreeRoot'
import styles from './Board.module.css'

import ConnectionLine from '../components/ConnectionLine'
import { generateMindMapData } from '../layouts'
import { IMindMap } from '../layouts/types'

interface IProps {
  source?: string
  structure: string
}

const Board: FC<IProps> = (props) => {
  const { source, structure } = props

  const data: IMindMap | null = useMemo(() => source ? generateMindMapData(source, structure) : null, [source, structure])

  if (source === undefined || data === null) {
    return null
  }

  const { root, connections } = data

  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        <div style={{
          position: 'relative',
          height: root.blockSize.height,
          width: root.blockSize.width,
          margin: 18,
        }}>
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
    </div>
  )
}

export default Board
