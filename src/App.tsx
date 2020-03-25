import React, { useState } from 'react'

import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-monokai'

import styles from './App.module.css'
import Board from './containers/Board'

import { STRUCTURES } from './layouts/structures/index'

const data = `{
  "root": {
    "title": "Frontend Web Development",
    "children": [
      {
        "title": "JavaScript",
        "children": [
          {
            "title": "TypeScript"
          },
          {
            "title": "React",
            "children": [
              {
                "title": "React Hooks"
              }
            ]
          },
          {
            "title": "Tools",
            "children": [
              {
                "title": "Webpack"
              },
              {
                "title": "ESLint"
              }
            ]
          }
        ]
      },
      {
        "title": "HTML",
        "children": [
          {
            "title": "HTML 5"
          }
        ]
      },
      {
        "title": "CSS",
        "children": [
          {
            "title": "CSS 3"
          },
          {
            "title": "CSS Modules"
          },
          {
            "title": "PostCSS"
          }
        ]
      }
    ]
  }
}`

function App () {
  const [mindMapData, setMindMapData] = useState(data)
  const [code, setCode] = useState(data)
  const [structure, setStructure] = useState(STRUCTURES.TREE_BALANCE)

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <Board source={mindMapData} structure={structure} />
      </div>
      <div className={styles.sidebar}>
        {/* <textarea rows={3} value={mindMapData} onChange={(e) => setMindMapData(e.target.value)} /> */}
        <div style={{ height: '5%', textAlign: 'center', padding: 5, boxSizing: 'border-box' }}>
          <button style={{ fontSize: 24 }} onClick={() => setMindMapData(code)}>APPLY</button>

          <select style={{ fontSize: 24 }} value={structure} onChange={(e) => setStructure(e.target.value)}>
            <option value={STRUCTURES.TREE_BALANCE}>TREE BALANCE</option>
            <option value={STRUCTURES.TREE_LEFT}>TREE LEFT</option>
            <option value={STRUCTURES.TREE_RIGHT}>TREE RIGHT</option>
          </select>

        </div>
        <AceEditor
          mode='json'
          theme='monokai'
          fontSize={16}
          value={code}
          onChange={setCode}
          name='UNIQUE_ID_OF_DIV'
          editorProps={{ $blockScrolling: true }}
          width='100%'
          height='95%'
        />
      </div>
    </div>
  )
}

export default App
