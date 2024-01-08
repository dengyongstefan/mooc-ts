import {ResolveType,RejectType,Executor } from './typeaction'

class Promise<T=any>{
  public resolve!:ResolveType 
  public reject!:RejectType 
  public status!:String
  public resolve_executor_value!: any
  public reject_executor_value!: any
  constructor(executor:Executor) {
    this.status = 'pending'
    this.resolve = (value:any):any=>{
        if(this.status === 'pending'){
            this.status = 'success'
            this.resolve_executor_value = value
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
    executor(this.resolve,this.reject)
  }

  then(resolveThen:ResolveType,rejectThen:RejectType){
    if(this.status === 'success'){
        resolveThen(this.resolve_executor_value)
        console.log('resolveThen====>');
    }
    if(this.status === 'fail'){
        rejectThen(this.reject)
        console.log('rejectThen====>');
    }
  }
}

export default Promise