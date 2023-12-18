export class UserService {
    Login(username:string,pwd:string,role:string){
        console.log('进入log',username);
        if(role === 'admin'){
            return true
        }else{
            return false
        }
    }

    register(){
        console.log('register');
    }
}