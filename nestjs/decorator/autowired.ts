import 'reflect-metadata'
import collection from '../collection'

// export function AutoWired(dependencyId:string, singleton?:boolean):PropertyDecorator{
//     return(targetClassPrototype,key)=>{
//         let PropClass = Reflect.getMetadata("design:type",targetClassPrototype,key)
//         let subClass = PropClass.getUserServiceImplement()
//         let serviceInstance
//         if(singleton){
//             /** 如果是单例模式，则只会拿到唯一的同一个单实例 */
//             serviceInstance = subClass.getInstance()
//         }else{
//             serviceInstance = new subClass()
//         }
//         // collection.set(injectId,instance)
//         Reflect.defineProperty(targetClassPrototype,dependencyId,{value:serviceInstance})
//     }
// } 

export function AutoWired(dependencyId:string):PropertyDecorator{
    return(targetClassPrototype,key)=>{
        let PropClass = Reflect.getMetadata("design:type",targetClassPrototype,key)
        let subClass = PropClass.getUserServiceImplement()
        let metaSingleton = Reflect.getMetadata("singleton",targetClassPrototype,key)
        let serviceInstance
        if(metaSingleton){
            console.log('=========AutoWired=====单例');
            /** 如果是单例模式，则只会拿到唯一的同一个单实例 */
            serviceInstance = subClass.getInstance()
        }else{
            serviceInstance = new subClass()
        }
        // 直接挂载到原型上
        Reflect.defineProperty(targetClassPrototype,dependencyId,{value:serviceInstance})
    }
} 