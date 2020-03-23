export interface ISource {
  root: ISourceNode
}

export interface ISourceNode {
  title: string
  children: ISourceNode[]
}

export interface IPoint {
  x: number
  y: number
}

export interface ISize {
  width: number
  height: number
}

export interface IBlock {
  width: number
  height: number
}

export interface IPosition {
  x: number
  y: number
}

export interface IJunction {
  x: number
  y: number
}

export interface IConnection {
  from: IPoint
  to: IPoint
}

export interface INode {
  id: string
  title: string
  size: ISize
  block: IBlock
  position: IPosition
  junction: IJunction
  connection: IConnection
  children?: INode[]
}

export interface IPartialNode {
  id: string
  title: string
  size?: ISize
  block?: IBlock
  position?: IPosition
  junction?: IJunction
  connection?: IConnection
  children?: IPartialNode[]
}

export interface IMindMap {
  root: INode
}
