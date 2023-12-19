import 'reflect-metadata'
export function singleton(isSingleton:boolean):PropertyDecorator {
    return(targetClassPrototype,key)=>{
        let propServiceClass:any = Reflect.getMetadata("design:type",targetClassPrototype,key)
        let serviceImpClass = propServiceClass.getUserServiceImplement()
        let serviceImpInStanceOrClass
        let metaSingleton = Reflect.getMetadata("singleton",targetClassPrototype,key)
        if(isSingleton){
            if(!metaSingleton){
                // 第一次设置单例模式，打上单例标签
                Reflect.defineMetadata("singleton",isSingleton,targetClassPrototype,key)
                serviceImpInStanceOrClass = serviceImpClass.getInstance()
            }
        }else{
            serviceImpInStanceOrClass = serviceImpClass
        }
        Reflect.defineMetadata("serviceImpInStanceOrClass",serviceImpInStanceOrClass,targetClassPrototype,key)
    }
}