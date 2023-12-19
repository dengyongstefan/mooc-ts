import { UserServiceInterface } from '../service';
import collection from '../collection';
import { AutoWired } from '../decorator'
import 'reflect-metadata'

class UserController{

    @AutoWired('UserServiceImplement')
    @AutoWired('UserServiceImplement')
    private useService!: UserServiceInterface

    public login():void{
        // let a:UserService = collection.get('useService')
        // a.register()
        Reflect.getOwnPropertyDescriptor(UserController.prototype,'UserServiceImplement')?.value?.register()
    }
}

let a = new UserController()
a.login()