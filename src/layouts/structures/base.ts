import { IPartialNode } from '../types'

export interface IStructure {
  structureName: string
  generateBlockContext: (node: IPartialNode) => void
}
