import React, { useState } from 'react'
import styles from './App.module.css'
import Board from './containers/Board'

const data = JSON.stringify({
  root: {
    id: 1,
    title: 'Central Topic',
    children: [
      {
        id: 2,
        title: 'Sub Topic',
        children: [
          {
            id: 3,
            title: 'Topic',
          },
        ],
      },
      {
        id: 4,
        title: 'Another Sub Topic',
      },
    ],
  },
})

function App () {
  const [mindMapData, setMindMapData] = useState(data)

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <Board source={mindMapData} />
      </div>
      <div className={styles.sidebar}>
        <textarea rows={3} value={mindMapData} onChange={(e) => setMindMapData(e.target.value)} />
      </div>
    </div>
  )
}

export default App
