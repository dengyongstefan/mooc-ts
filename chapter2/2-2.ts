let str:string = 'hello world'
console.log('2',str);

let obj1:Object = 1
let obj2:Object = 'str'
let obj3:{} = []

let val: string | number | symbol = 3


type a = {name:string}
type b = {age:number}
let crossVal: a&b = {
    name:'123',
    age:24
}

export {}