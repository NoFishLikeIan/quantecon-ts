import { Matrix } from "./m-utils"

export const isNull = (k: unknown): k is null => k === null
export const isNonNegative = (n: number) => n >= 0
export const isNonPositive = (n: number) => n === 0 || !isNonNegative(n)
export const isMatrix = (n: unknown): n is Matrix => Array.isArray(n) && Array.isArray(n[0])