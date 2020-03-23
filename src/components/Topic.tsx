import React, { FC } from 'react'

import styles from './Topic.module.css'

import { ISize, IJunction } from '../layouts/types'

interface IProps {
  title: string
  size?: ISize
  junction?: IJunction
}

const Topic: FC<IProps> = (props) => {
  const { title, size, junction } = props
  const { width = 0, height = 0 } = size || {}
  const { x = 0, y = 0 } = junction || {}

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
