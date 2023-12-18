import { UserServiceInterface } from '../service';
import collection from '../collection';
import { Autowired } from '../decorator'
import 'reflect-metadata'

class UserController{

    @Autowired('UserServiceImplement')
    private useService!: UserServiceInterface

    public login():void{
        // let a:UserService = collection.get('useService')
        // a.register()
        Reflect.getOwnPropertyDescriptor(UserController.prototype,'UserServiceImplement')?.value?.register()
    }
}

let a = new UserController()
a.login()