import React, { FC } from 'react'

import styles from './Topic.module.css'

import { ISize, IPosition } from '../layouts/types'

interface IProps {
  title: string
  size?: ISize
  position?: IPosition
  className?: 'central' | 'main' | 'sub'
}

const Topic: FC<IProps> = (props) => {
  const { title, size, position, className } = props
  const { width = 0, height = 0 } = size || {}
  const { x = 0, y = 0 } = position || {}

  const styleName = className ? styles[className] : styles.sub

  return (
    <div
      className={`${styles.topic} ${styleName}`}
      style={{ width, height, top: y, left: x }}
    >
      {title}
    </div>
  )
}

export default Topic
