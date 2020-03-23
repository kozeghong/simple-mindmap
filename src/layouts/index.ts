import { IMindMap, IPartialNode, ISource, ISourceNode } from './types'
import { getTopicSize } from './shapes'

import { calcBlockSizeAndChildPosition } from './structures/treeRight'

let id = 0
function generateUniqueId () {
  return id++
}

export function traverseNode (node: ISourceNode): IPartialNode {
  return {
    id: `${generateUniqueId()}`,
    title: node.title,
    size: getTopicSize(node),
    children: node.children ? node.children.map(traverseNode) : undefined,
  }
}

export function generateMindMapData (source: string): IMindMap {
  const sourceData: ISource = JSON.parse(source || '{}')

  const mindmap = {
    root: traverseNode(sourceData.root),
  }

  calcBlockSizeAndChildPosition(mindmap.root)

  return mindmap as IMindMap
}
