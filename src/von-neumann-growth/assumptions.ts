import { Matrix, sumAxis0, sumAxis1 } from "../utils/m-utils"
import { isNull, isNonPositive, isNonNegative } from "../utils/is"
import { checkAssumptions } from "../utils/errors";

function parityProdConsumption(B: Matrix) {
  const cSum = sumAxis0(B)
  return !isNull(cSum) && cSum.every(isNonNegative)
}

function noFreeLunch(A: Matrix) {
  const rSum = sumAxis1(A)
  return rSum.every(isNonNegative)
}

export function vonNeummanAssumptions(A: Matrix, B: Matrix) {
  return checkAssumptions(
    [parityProdConsumption, B],
    [noFreeLunch, A]
  )
}
