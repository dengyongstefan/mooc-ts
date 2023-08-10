// let str:string = 'hello world'
// console.log('2',str);

// let obj1:Object = 1
// let obj2:Object = 'str'
// let obj3:{} = []

// let val: string | number | symbol = 3


// type a = {name:string}
// type b = {age:number}
// let crossVal: a&b = {
//     name:'123',
//     age:24
// }

// let anyA:any = '1'
// let c:number = anyA


// let d:number = 1
// let anyB:any = d

// let a:unknown = null
// let b:any = null
// let c:null = null

const list: [string,number,string, ...any[]] = ['stefan',30,'武汉',28,'华为']
const [name,age,addr,...res] = list
console.log('res',res);




export {}