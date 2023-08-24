// type paramsType<T> = T extends (arg: infer P) => any ? P : T

// type Func = (user:number) => number

// type A = paramsType<Func>

// interface Customer {
//     name:string
//     degree:string
// }

// type AddAttrToObj<T,K extends string, V> = {
//     [P in keyof T | K] :P extends keyof T ? T[P] : V
// }

// type B = AddAttrToObj<Customer,'weixin',number>

interface Customer {
    name:{
        getName:(id:number) => number
        getOrder:(id:number) => number
    }
    degree:{
        getID:(id:number) => number
        getDegree:(id:number) => number
    }
}

type temp<T,U> = `${T & string}/${U & string}`

type A = temp<'name'|'degree','getName'|'getOrder'>
// type A = "name/getName" | "name/getOrder" | "degree/getName" | "degree/getOrder"

type ModulesSpliceKeys<T> = { 
    [K in keyof T] : temp<K ,keyof T[K]>
}

type B = ModulesSpliceKeys<Customer>
// type B = {
//     name: "name/getName" | "name/getOrder";
//     degree: "degree/getID" | "degree/getDegree";
// }

type ModulesSpliceKeys2<T> = { 
    [K in keyof T] : temp<K ,keyof T[K]>
} [keyof T]
type C = ModulesSpliceKeys2<Customer>
// type C = "name/getName" | "name/getOrder" | "degree/getID" | "degree/getDegree"

export {}