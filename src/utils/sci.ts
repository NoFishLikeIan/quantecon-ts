import * as m from "@thi.ng/math";

const h = 0.001

type LinearFn = (n: number) => number

/**
 * Naive implementation of the Newton method to
 */
function rootNewtonMethod(f: LinearFn, guess: number): number {
  if (Math.abs(f(guess)) < h) return guess
  const approx = guess - (f(guess) / m.derivative(f)(guess))
  return rootNewtonMethod(f, approx)
}

export function fsolve(f: LinearFn, x0: number = 0) {
  return rootNewtonMethod(f, x0)
}