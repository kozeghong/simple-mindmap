import { ISourceNode } from '../types'

let measureTextCanvas: HTMLCanvasElement
let measureTextCanvasContext: CanvasRenderingContext2D | null

const getMeasureTextCanvasContext = () => {
  if (!measureTextCanvas) {
    measureTextCanvas = document.createElement('canvas')
  }
  if (!measureTextCanvasContext) {
    measureTextCanvasContext = measureTextCanvas.getContext('2d')
  }
  return measureTextCanvasContext
}

export function getTopicSize (node: ISourceNode) {
  const { title } = node

  const ctx = getMeasureTextCanvasContext()

  if (ctx) {
    ctx.font = '16px sans-serif'
    const width = ctx.measureText(title).width
    return {
      width: Math.ceil(width) + 28,
      height: 50,
    }
  }

  return {
    width: title.length * 9 + 28,
    height: 50,
  }
}
