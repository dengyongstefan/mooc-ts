// 单件实例模式
// class utils {
//     static utils:utils //私有属性
//     private constructor(){} // private 的构造器只能在类内部使用
//     static getInstance(){
//         if(!this.utils){
//             this.utils = new utils()
//         }else{
//             return this.utils
//         }
//     }
//     getTIme(){}
// }

// const instance = utils.getInstance()

// class People {
//     age:number
//     name:string
//     constructor(_name:string,_age:number){
//         this.name = _name
//         this.age = _age
//     }
//     // 编写一个方法打印吃的食物
//     doEat(food:string){
//         console.log(`eat--${food}`)
//     }
// }

// // getOwnPropertyDescriptor静态方法返回一个对象，该对象描述给定对象上特定属性的配置
// // dataProp会单独开辟一个内存空间，直接修改dataProp并不会改到prototype原型链上
// const dataProp = Object.getOwnPropertyDescriptor(People.prototype,'doEat')
// // value值就是函数本身，targetMethod存放原始的方法
// const targetMethod = dataProp!.value
// dataProp!.value = function(...args:any[]){
//     console.log('开始拦截');
//     // 使用原来的方法
//     targetMethod.apply(this,args)
//     console.log('结束拦截');
// }

// // 重新将该属性的描述重新赋值给该属性
// Object.defineProperty(People.prototype,'doEat',dataProp!)

// let p = new People('stefan',12)
// p.doEat('apple')

// const arr = [12]
// console.log(typeof arr);
// console.log(Object.prototype.toString.call(arr));

// const map = new Map() 
// console.log(typeof map);
// console.log(Object.prototype.toString.call(map));

export {}