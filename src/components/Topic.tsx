import React, { FC } from 'react'

import styles from './Topic.module.css'

import { ISize, IPosition } from '../layouts/types'

interface IProps {
  title: string
  size?: ISize
  position?: IPosition
}

const Topic: FC<IProps> = (props) => {
  const { title, size, position } = props
  const { width = 0, height = 0 } = size || {}
  const { x = 0, y = 0 } = position || {}

  return (
    <div
      className={styles.topic}
      style={{ width, height, top: y, left: x }}
    >
      {title}
    </div>
  )
}

export default Topic
