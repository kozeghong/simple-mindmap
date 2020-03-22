export interface INode {
  id: string
  title: string
  children: INode[]
}

export interface IMindMap {
  root: INode
}
