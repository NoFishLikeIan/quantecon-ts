import * as m from '@thi.ng/matrices'
import * as t from '@thi.ng/transducers'
import * as g from '@thi.ng/math'
import * as v from '@thi.ng/vectors'

export type Matrix = Array<Array<number>>
// export type BiMatrix = Matrix & {length: } fix property

export const shape = (mat: Matrix): [number, number | null] => [mat.length, mat[0] ? mat[0].length : null]
const nonNeg = (x: number) =>  x >= 0

export function sameShape(...fs: Matrix[]) {
  const s = shape(fs[0])
  return fs.every(mat => shape(mat) === s)
}

export function allNonNegative(mat: Matrix) {
  return mat.every(r => r.every(nonNeg))
}

/**
 * Sum over matrix column
 */
export function sumAxis0(mat: Matrix) {
  const i = shape(mat)[1]
  if (i === null) return null
  return [...t.range(0, i)].map(
    i => v.sum(mat.map(r => r[i])),
    0)
}

/**
 * Sum over matrix row
 */
export function sumAxis1(mat: Matrix) {
  return mat.map(v.sum)
}


