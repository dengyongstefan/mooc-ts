type paramsType<T> = T extends (arg: infer P) => any ? P : T

type Func = (user:number) => number

type A = paramsType<Func>