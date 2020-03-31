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

export interface IBlockSize {
  width: number
  height: number
}

export interface IBlockPosition {
  x: number
  y: number
}

export interface IPosition {
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
  blockSize: IBlockSize
  blockPosition: IBlockPosition
  position: IPosition
  connection: IConnection
  children?: INode[]
  structure?: string
}

export interface IPartialNode {
  id: string
  title: string
  size?: ISize
  blockSize?: IBlockSize
  blockPosition?: IBlockPosition
  position?: IPosition
  connection?: IConnection
  children?: IPartialNode[]
  structure?: string
}

export interface IMindMap {
  root: INode
  connections?: IConnection[]
}

export type IDirection = 'up' | 'right' | 'down' | 'left'

export enum IConnectionType {
  STRAIGHT = 'STRAIGHT',
  CURVE = 'CURVE',
  POLYLINE = 'POLYLINE'
}
