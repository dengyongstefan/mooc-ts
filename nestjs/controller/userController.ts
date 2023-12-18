import { UserService } from '../service';
import collection from '../collection';
import { Autowired } from '../decorator'

class UserController{

    @Autowired('useService')
    private useService!: UserService

    public login():void{
        let a:UserService = collection.get('useService')
        a.register()
    }
}

let a = new UserController()
a.login()