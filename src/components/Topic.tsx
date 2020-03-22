import React, { FC } from 'react'

import styles from './Topic.module.css'

interface IProps {
  title: string
}

const Topic: FC<IProps> = (props) => {
  const { title } = props
  return (
    <div className={styles.topic}>{title}</div>
  )
}

export default Topic
