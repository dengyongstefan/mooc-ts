import 'reflect-metadata'
function Inject(injectId:string):PropertyDecorator{
    return (target:object,propertyKey:string|symbol):void=>{
        const userService = Reflect.getMetadata("design:key",target,propertyKey) //获取原有的UserService类型
        const user = new userService()
    }
}

function get(path:string):MethodDecorator{
    return (target, propertyKey, descriptor):void=>{
        Reflect.defineMetadata('path',path,target,propertyKey) //将路径绑定在原型的方法上 
    }
}

function Controller(path:string):ClassDecorator{
    return (targetClass):void=> {
        Object.keys(targetClass.prototype).forEach(method=>{
            const mePath = Reflect.getMetadata('path',targetClass.prototype,method) // 获取绑定在方法上的元数据 
            console.log('mePath',mePath);
        })
    }
}

class UserService {}
//属性--方法参数--方法--类

@Controller('auth')
class AuthController {
    @Inject('userService')
    private userService?: UserService

    @get('/login')
    public login(){}
}