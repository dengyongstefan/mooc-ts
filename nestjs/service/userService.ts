export class UserServiceInterface {
    static getUserServiceImplement(){
        return UserServiceImplement
    }
    constructor(){
        console.log('========UserServiceInterface========');
    }
}

export class UserServiceImplement {
    static selfInstance: UserServiceImplement = new UserServiceImplement()

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

    static getInstance(){
        return this.selfInstance
    }
    
    constructor(){
        console.log('========UserServiceImplement========');
    }
}