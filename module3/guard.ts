{

    //  guard  ===>  check করবে  যে এইটা কি না 

    interface NormalUser {
        name:string,
    }
    interface AdminUser {
        name:string,
        role:"admin"
    }
    
    const checkUser = (user:NormalUser | AdminUser)=>{
        // using  (in) guard 
        if ("role" in user) {
        console.log("admin user",user.name, user.role);
        
        }else{
            console.log("normal user " , user.name);
            
        }
    }

    const normalUser :NormalUser ={
        name:"normal user Mr. X"
    } 
    const adminUser :AdminUser ={
        name:"Admin user Mr. Y",
        role:"admin"
    } 

    checkUser(adminUser)










































    //
}