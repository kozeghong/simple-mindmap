import React, { useState } from 'react'

import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-monokai'

import styles from './App.module.css'
import Board from './containers/Board'

// const data = JSON.stringify({
//   root: {
//     title: 'Central Topic',
//     children: [
//       {
//         title: 'Sub Topic 1',
//         children: [
//           {
//             title: 'Topic 1',
//           },
//           {
//             title: 'Topic 2',
//           },
//           {
//             title: 'Topic 3',
//           },
//         ],
//       },
//       {
//         title: 'Sub Topic 2',
//       },
//       {
//         title: 'Sub Topic 3',
//         children: [
//           {
//             title: 'Topic 1',
//             children: [
//               {
//                 title: 'ABC',
//               },
//             ],
//           },
//           {
//             title: 'Topic 2',
//           },
//           {
//             title: 'Topic 3',
//           },
//         ],
//       },
//     ],
//   },
// })

const data = `{
  "root": {
    "title": "Central Topic",
    "children": [
      {
        "title": "Sub Topic 1",
        "children": [
          {
            "title": "Topic 1"
          },
          {
            "title": "Topic 2"
          },
          {
            "title": "Topic 3"
          }
        ]
      },
      {
        "title": "Sub Topic 2"
      },
      {
        "title": "Sub Topic 3",
        "children": [
          {
            "title": "Topic 1",
            "children": [
              {
                "title": "ABC"
              }
            ]
          },
          {
            "title": "Topic 2"
          },
          {
            "title": "Topic 3"
          }
        ]
      }
    ]
  }
}`

function App () {
  const [mindMapData, setMindMapData] = useState(data)
  const [code, setCode] = useState(data)

  console.log(code)

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <Board source={mindMapData} />
      </div>
      <div className={styles.sidebar}>
        {/* <textarea rows={3} value={mindMapData} onChange={(e) => setMindMapData(e.target.value)} /> */}
        <div style={{ height: '5%', textAlign: 'center', padding: 5, boxSizing: 'border-box' }}>
          <button style={{ fontSize: 24 }} onClick={() => setMindMapData(code)}>APPLY</button>
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
