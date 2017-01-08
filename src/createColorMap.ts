import { RGB, RGBA, Alpha } from './interfaces'

export function createColorMap(from: RGB, to: RGB, shades: number, alpha?: Alpha): RGBA[] {
  const rgba: any[] = []
  const start = [...from]
  const diff = [
    to[0] - from[0],
    to[1] - from[1],
    to[2] - from[2]
  ]
  if (alpha) {
    start.push(alpha[0])
    diff.push(alpha[1] - alpha[0])
  }
  for (let i = 0; i < shades; i++) {
    const inc = 1 /
      Math.max(shades - 1, 1)
    const color = [
      Math.round(start[0] + i * diff[0] * inc),
      Math.round(start[1] + i * diff[1] * inc),
      Math.round(start[2] + i * diff[2] * inc),
      alpha ? start[3] + i * diff[3] * inc : 1
    ]
    rgba.push(color)
  }
  return rgba
}
