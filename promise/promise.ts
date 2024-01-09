import {ResolveType,RejectType,Executor } from './typeaction'

class Promise<T=any>{
  public resolve!:ResolveType 
  public reject!:RejectType 
  public status!:String
  public resolve_executor_value!: any
  public reject_executor_value!: any
  public resolve_then_callbacks:(()=>void)[]= []
  public reject_then_callbacks:(()=>void)[]= []

  constructor(executor:Executor) {
    this.status = 'pending'
    this.resolve = (value:any):any=>{
        if(this.status === 'pending'){
            this.status = 'success'
            this.resolve_executor_value = value
            this.resolve_then_callbacks.forEach(callBack=>callBack());
            console.log("resolve===>value",value)
        }
    }
    this.reject = (value:any):any=>{
        if(this.status === 'pending'){
            this.status = 'fail'
            this.reject_executor_value = value
            console.log("reject===>value",value)
        }
    }
    try {
        executor(this.resolve,this.reject)
    } catch (error) {
        console.log('executor_error======>',error!.toString());
        this.status = 'pending'
        this.reject(error!.toString())
        throw new Error('程序终止')
    }
  }

  then(resolveThen:ResolveType,rejectThen:RejectType){
    return new Promise((resolve,reject)=>{
        let res = ''
        console.log('this',this); // this 代表外层对象
        if(this.status === 'success'){
            res = resolveThen(this.resolve_executor_value)
            resolve(res)
            console.log('resolveThen====>');
        }
        if(this.status === 'fail'){
            res = rejectThen(this.reject)
            reject(res)
            console.log('rejectThen====>');
        }
        if(this.status === 'pending'){
            this.resolve_then_callbacks.push(()=>{
                res = resolveThen(this.resolve_executor_value)
            })
            this.reject_then_callbacks.push(()=>{
                res = rejectThen(this.resolve_executor_value)
            })
        }
    })
 
  }
}

export default Promise