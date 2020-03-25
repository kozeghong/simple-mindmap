import { IStructure } from './base'
import treeLeft from './treeLeft'
import treeRight from './treeRight'
import treeBalance from './treeBalance'

interface IStructureMap {
  [name: string]: IStructure
}

const STRUCTURES = {
  TREE_LEFT: treeLeft.structureName,
  TREE_RIGHT: treeRight.structureName,
  TREE_BALANCE: treeBalance.structureName,
}

const structureMap: IStructureMap = {
  [treeLeft.structureName]: treeLeft,
  [treeRight.structureName]: treeRight,
  [treeBalance.structureName]: treeBalance,
}

export {
  STRUCTURES,
  structureMap,
  treeLeft,
  treeRight,
  treeBalance,
}
