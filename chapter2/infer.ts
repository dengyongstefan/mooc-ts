type paramsType<T> = T extends (arg: infer P) => any ? P : T

type Func = (user:number) => number

type A = paramsType<Func>

interface Customer {
    name:string
    degree:string
}

type AddAttrToObj<T,K extends string, V> = {
    [P in keyof T | K] :P extends keyof T ? T[P] : V
}

type B = AddAttrToObj<Customer,'weixin',number>
