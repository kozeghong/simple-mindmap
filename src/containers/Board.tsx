import React, { FC, useState, useMemo } from 'react'

import TreeRoot from './TreeRoot'
import styles from './Board.module.css'

import ConnectionLine from '../components/ConnectionLine'
import BlockViewer from '../components/BlockViewer'
import { generateMindMapData } from '../layouts'
import { IMindMap, IConnectionType } from '../layouts/types'

interface IProps {
  source?: string
  structure: string
  connectionType: IConnectionType
}

const VIEW_BLOCK = false

const Board: FC<IProps> = (props) => {
  const { source, structure, connectionType } = props
  const [scale, setScale] = useState(100)
  const zoomIn = () => setScale(scale => scale <= 190 ? scale + 10 : scale)
  const zoomOut = () => setScale(scale => scale > 10 ? scale - 10 : scale)

  const data: IMindMap | null = useMemo(() => {
    try {
      return source ? generateMindMapData(source, structure) : null
    } catch {
      return null
    }
  }, [source, structure])

  if (source === undefined || data === null) {
    return null
  }

  const { root, connections } = data

  const rootBlockHeight = root.blockSize.height
  const rootBlockWidth = root.blockSize.width

  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        <div style={{
          position: 'relative',
          height: rootBlockHeight,
          width: rootBlockWidth,
          margin: 18,
          transition: 'transform 0.1s',
          transform: `scale(${scale * 0.01})`,
          transformOrigin: 'top left',
        }}>

          {VIEW_BLOCK ? (
            <BlockViewer
              containerHeight={rootBlockHeight}
              containerWidth={rootBlockWidth}
              root={root}
            />
          ) : null}

          { connections ? (
            <ConnectionLine
              containerHeight={rootBlockHeight}
              containerWidth={rootBlockWidth}
              connections={connections}
              connectionType={connectionType}
            />
          ) : null}

          <TreeRoot rootNode={root} />

        </div>
      </div>

      <div className={styles.zoom}>
        <button onClick={zoomOut}>-</button>
        <span className={styles.scale}>{scale} %</span>
        <button onClick={zoomIn}>+</button>
      </div>
    </div>
  )
}

export default Board
