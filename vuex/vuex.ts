import {App, inject} from 'vue'
const _Key = 'store'

export function useStore(){
    return inject(_Key)
}

export function createStore<S>(options:StoreOptions<S>){
    return new Store(options)
}

export class Store<S=any>{
    constructor(options:StoreOptions<S>){}
    install(app:App){
        app.provide(_Key,this)
    }
}

export class ModuleWrapper<S,R>{
    children: Record<string,ModuleWrapper<any,R>> = {}
    rawModule: Module<any,R>
    state:S
    namespace:boolean
    constructor(rawModule_:Module<any,R>){
        this.rawModule = rawModule_
        this.state = rawModule_.state || Object.create(null)
        this.namespace = rawModule_.namespace || false
    }
    addChild(key:string, moduleWrapper: ModuleWrapper<any,R>):void {
        this.children[key] = moduleWrapper
    }
    getChild(key:string):ModuleWrapper<any,R>{
        return this.children[key]
    }
}

class ModuleCollection<R>{
    root!:ModuleWrapper<any,R>
    constructor(rawRootModule:Module<any,R>){
        this.register([],rawRootModule)
    }
    register(path:string[],rawModule:Module<any,R>){
        let newModule = new ModuleWrapper(rawModule)
        if(path.length === 0){
            // 主模块
            this.root = newModule
        }else{
            let parentModule = this.get(path.slice(0,-1))
            parentModule.addChild(path[path.length-1],newModule)
        }
        if(rawModule.modules){
            let sonModule = rawModule.modules
            Object.keys(sonModule).forEach(key => {
                this.register(path.concat(key),sonModule)
            })
        }
    }
    get(path:string[]){
        let module = this.root
        return path.reduce(
            (moduleWrapper:ModuleWrapper<any,R>,key:string)=>{
                return module.getChild(key)
            },
            module   
        )
    }
}

interface StoreOptions<S>{
    state?: S;
    getters?: GetterTree<S,S>;
    mutations?: MutationTree<S>;
    actions?:ActionTree<S,S>;
    modules?:ModuleTree<S>;
}

interface ModuleTree<R>{
    [key:string]:Module<any,R>
}

interface Module<S,R>{
    namespace?:boolean;
    state?: S;
    getters?: GetterTree<S,R>;
    mutations?: MutationTree<S>;
    actions?:ActionTree<S,R>;
    modules?:ModuleTree<R>;
}

/**
 * GetterTree
 */
interface GetterTree<S,R>{
    [key:string]:Getter<S,R>
}
type Getter<S,R> = (state:S,getters:any,rootState:R,rootGetter:any) => any

/**
 * MutationTree
 */
interface MutationTree<S>{
    [key:string]:Mutation<S>
}
type Mutation<S> = (state:S,payload?:any) => void

/**
 * ActionTree
 */
interface ActionTree<S,R>{
    [key:string]:Action<S,R>
}
type Action<S,R>=(context:ActionContext<S,R>,payload?:any)=>any
interface ActionContext<S,R>{
    dispatch:Dispatch;
    commit:Commit;
    state:S
}

type Dispatch = (type:string,payload?:any)=>any
type Commit = (type:string,payload?:any)=>any