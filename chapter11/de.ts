/** 泛型工厂类继承装饰器实现 */
function ClassFunctionExtends<T extends {new (...any:any[]):any}>(m:T){
    class sonClass extends m {
        constructor(...args:any[]){
            super(args)
            console.log('m执行')
        }
    }
    return sonClass
}

@ClassFunctionExtends
class Test {
    name:string
    constructor(){
        this.name = 'stefan'
    }
}

const test = new Test()