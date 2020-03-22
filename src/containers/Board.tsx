import React, { FC } from 'react'

import TreeRoot from './TreeRoot'

import { IMindMap } from '../layouts/types'

interface IProps {
  source?: string
}

const Board: FC<IProps> = (props) => {
  const { source } = props

  if (source === undefined) {
    return null
  }

  const data: IMindMap = JSON.parse(source)

  const { root } = data

  return (
    <div>
      <TreeRoot rootNode={root} />
    </div>
  )
}

export default Board
