/*
Kemeny et al. (1956, ECTA) and Gale (1960, Chapter 9.5)
*/

import * as m from '@thi.ng/matrices'
import * as v from '@thi.ng/vectors'
import { Matrix, sameShape, allNonNegative, shape } from '../utils/m-utils'
import { assertOrThrow } from '../utils/errors'
import { vonNeummanAssumptions } from './assumptions';

function validateAB(A: Matrix, B: Matrix, strict: boolean = false) {
  assertOrThrow('Matrix have same shape', sameShape, A, B)
  assertOrThrow('Non negative', allNonNegative, A, B)
  const assumptions = vonNeummanAssumptions(A, B)
  if (strict) {
    assertOrThrow('Not all assumption were respected', a => v.sum(a) === 0 , assumptions)
  }
}


function bounds(A: Matrix, B: Matrix) {
  const [n, m] = shape(A)

  const f = (alpha: number) => alpha // ((B - α * A) @ np.ones((n, 1))).max()
  const g = (beta: number) => beta // (np.ones((1, m)) @ (B - β * A)).min()

}