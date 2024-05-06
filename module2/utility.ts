{
//

interface User {
    name:string,
    age:number,
    role?:number,
    contact:string,
    
}

// pike 
type UserNameAndAge =Pick<User,"name"| "age">

// omit
type RemoveNameAndAge = Omit<User,"name"|"age">

// Required 
type RequiredAllField = Required<User>

// ReadOnly
type ReadOnlyAllField = Readonly<User>

// Partial  ====>  all field should be optional
type AllFieldOptional = Partial<User>


// Record
type EmptyObj = Record<string,unknown>

const info :EmptyObj ={
    name:"hello",
    age:25
}








































































    //
}