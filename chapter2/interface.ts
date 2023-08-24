interface Customer {
    name: string;
    age: string;
    level: string;
    getName:(id:number)=>number
}

type Ckeys1 = keyof Customer

type keys<T> = T extends any? T:never
type Ckeys = keys<keyof Customer>

// Record<string,any> 可以兼容数组
// type Degree<T extends Record<string,any>> = {
//     [P in keyof T as T[P] extends Function?`do${Capitalize<P & string>}` : never]:T[P]
// }

type ExcArray<T> = Exclude<T,Array<any>>
type Degree<T extends Record<string,any>> = {
    [P in keyof ExcArray<T>as ExcArray<T>[P] extends Function?`do${Capitalize<P & string>}` : never]:ExcArray<T>[P]
}

type A  = Degree<Customer>
// type A = {
//     doGetName: (id: number) => number;
// }
export {}

