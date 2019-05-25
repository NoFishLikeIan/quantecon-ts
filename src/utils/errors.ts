const ASSERTION_ERROR = (msg: string) => `Something wrong with your input matrices: ${msg}`

export const assertOrThrow = <T>(msg: string, cond: (...arg: T[]) => boolean, ...params: T[]) => {
  if (!cond(...params)) {
    throw new Error(ASSERTION_ERROR(msg))
  }
}

type CndTuple<T> = [(c: T) => boolean, T]
export const checkAssumptions = <T>(...cond: CndTuple<T>[]): (0 | 1)[] => cond.map(([fn, a]) => fn(a) ? 1 : 0)