// Error
export class Left<L> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }
}

// Success
export class Right<R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }
}

export type Either<L, R> = Left<R> | Right<R>

export const left = <L, R>(value: any): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: any): Either<L, R> => {
  return new Left(value)
}
