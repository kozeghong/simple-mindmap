import { IMindMap, IPartialNode, ISource, ISourceNode, IConnection, INode } from './types'
import { getTopicSize } from './shapes'
import { convertRelativeToAbsolutePosition } from './position'

import { structureMap } from './structures'

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

export function collectConnectionLines (root: IPartialNode): IConnection[] {
  const connections: IConnection[] = []

  function traverseNode (node: IPartialNode) {
    if (node.connection) {
      connections.push(node.connection)
    }
    node.children && node.children.forEach(child => traverseNode(child))
  }

  traverseNode(root)

  /** .slice(1) to throw away the root.connection  */
  return connections.slice(1)
}

export function generateMindMapData (source: string, structure: string): IMindMap {
  const sourceData: ISource = JSON.parse(source || '{}')

  const mindmap: IMindMap = {
    root: traverseNode(sourceData.root) as INode,
  }

  structureMap[structure].generateBlockContext(mindmap.root)

  convertRelativeToAbsolutePosition(mindmap.root)

  mindmap.connections = collectConnectionLines(mindmap.root)

  return mindmap
}
