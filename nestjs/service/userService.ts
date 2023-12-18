export class UserServiceInterface {
    static getUserServiceImplement(){
        return UserServiceImplement
    }
}

export class UserServiceImplement {
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