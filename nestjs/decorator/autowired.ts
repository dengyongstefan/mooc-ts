import 'reflect-metadata'
import collection from '../collection'

export  function Autowired(injectId:string):PropertyDecorator{
    return(targetClassPrototype,key)=>{
        let PropClass = Reflect.getMetadata("design:type",targetClassPrototype,key)
        let instance = new PropClass()
        collection.set(injectId,instance)
    }
}