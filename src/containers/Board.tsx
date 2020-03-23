import React, { FC } from 'react'

import TreeRoot from './TreeRoot'
import styles from './Board.module.css'

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

  const { root } = data

  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        <TreeRoot rootNode={root} />
      </div>
    </div>
  )
}

export default Board
