import * as m from '@thi.ng/matrices'
import * as t from '@thi.ng/transducers'
import * as g from '@thi.ng/math'
import * as v from '@thi.ng/vectors'
import { isMatrix, isNonNegative } from './is';

export type Matrix = Array<Array<number>>
// export type BiMatrix = Matrix & {length: } fix property

export const shape = (mat: Matrix): [number, number | null] => [mat.length, mat[0] ? mat[0].length : null]

export function mapBiMatrix(a: Matrix, fn: (m: number, i: number, j: number) => number) {
  return a.map((row, i) => row.map((elem, j) => fn(elem, i, j)))
}

export function sameShape(...fs: Matrix[]) {
  const s = shape(fs[0])
  return fs.every(mat => shape(mat) === s)
}

export function allNonNegative(mat: Matrix) {
  return mat.every(r => r.every(isNonNegative))
}

export function mProduct(f: Matrix | number, s: Matrix): Matrix {
  if (isMatrix(f)) {
    if (!sameShape(f, s)) { [[]] }
    m.mul22([], f, s)
    return [[]] // TODO: Cache behavior
  } else {
    return mapBiMatrix(s, (e) => e * f)
  }
}

export function mSum(f: Matrix , s: Matrix): Matrix {
  if (!sameShape(f, s)) { [[]] }
  return mapBiMatrix(f, (e, i, j) => e + s[i][j])
}

export function mDiff(f: Matrix, s: Matrix) {
  if (!sameShape(f, s)) { return null }
  const negS = mProduct(-1 ,s)
  return mSum(f, negS)
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