import { UserServiceInterface } from '../service';
import collection from '../collection';
import { AutoWired,singleton } from '../decorator'
import 'reflect-metadata'

class UserController{

    @AutoWired('UserServiceImplement')
    @singleton(true)
    private useService!: UserServiceInterface

    public login():void{
        Reflect.getOwnPropertyDescriptor(UserController.prototype,'UserServiceImplement')?.value?.register()
    }
}

let a = new UserController()
a.login()