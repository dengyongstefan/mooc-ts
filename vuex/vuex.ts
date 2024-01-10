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