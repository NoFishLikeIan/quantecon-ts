export const isNull = (k: unknown): k is null => k === null
export const isNonNegative = (n: number) => n >= 0
export const isNonPositive = (n: number) => n === 0 || !isNonNegative(n)