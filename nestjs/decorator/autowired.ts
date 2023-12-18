import 'reflect-metadata'
import collection from '../collection'

export function Autowired(injectId:string):PropertyDecorator{
    return(targetClassPrototype,key)=>{
        let PropClass = Reflect.getMetadata("design:type",targetClassPrototype,key)
        let subClass = PropClass.getUserServiceImplement()
        let instance = new subClass()
        // collection.set(injectId,instance)
        Reflect.defineProperty(targetClassPrototype,injectId,{value:instance})
    }
}