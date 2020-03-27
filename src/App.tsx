import React, { useState } from 'react'

import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-monokai'

import styles from './App.module.css'
import Board from './containers/Board'

import { STRUCTURES } from './layouts/structures/index'
import { IConnectionType } from './layouts/types'

import presetData from './presetData'

function App () {
  const [mindMapData, setMindMapData] = useState(presetData[0])
  const [code, setCode] = useState(presetData[0])
  const [structure, setStructure] = useState(STRUCTURES.TREE_BALANCE)
  const [connectionType, setConnectionType] = useState(IConnectionType.CURVE)

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <Board source={mindMapData} structure={structure} connectionType={connectionType} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.controlPanel}>

          <select
            onChange={(e) => setCode(presetData[parseInt(e.target.value, 10) || 0])}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>

          <button onClick={() => setMindMapData(code)}>Apply JSON</button>

          <select
            value={structure}
            onChange={(e) => setStructure(e.target.value)}
          >
            <option value={STRUCTURES.TREE_BALANCE}>TREE BALANCE</option>
            <option value={STRUCTURES.TREE_LEFT}>TREE LEFT</option>
            <option value={STRUCTURES.TREE_RIGHT}>TREE RIGHT</option>
          </select>

          <select
            value={connectionType}
            onChange={(e) => setConnectionType(e.target.value as IConnectionType)}
          >
            <option value={IConnectionType.CURVE}>Curve</option>
            <option value={IConnectionType.STRAIGHT}>Straight</option>
            <option value={IConnectionType.POLYLINE}>Polyline</option>
          </select>

        </div>

        <div className={styles.codeEditor}>
          <AceEditor
            mode='json'
            theme='monokai'
            fontSize={16}
            value={code}
            onChange={setCode}
            name='UNIQUE_ID_OF_DIV'
            editorProps={{ $blockScrolling: true }}
            width='100%'
            height='100%'
          />
        </div>

      </div>
    </div>
  )
}

export default App
