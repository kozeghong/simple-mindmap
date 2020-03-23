import { ISourceNode } from '../types'

export function getTopicSize (node: ISourceNode) {
  const { title } = node

  return {
    width: title.length * 12 + 28,
    height: 50,
  }
}
