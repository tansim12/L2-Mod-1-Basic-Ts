// string 
const stringValue:string = "tansim"

// number 
const numberValue:number = 5475

// boolean
const booleanValue:Boolean = false

// undefined 
const undefinedType:undefined = undefined

// null 
const nullValue:null = null

// let d ; now d is any. he gets any of type 
let d:number
d=123

// object 
const info:object={
    name:"nai",
    bari:"nai"
}

// array 
const arrayValue:object =[1,3,4,9,0,2,3,4,5,0]   
// he get object value because Array is object of Array 

// const arrayNewValue:Array =[1,3,4,9,0,2,3,4,5,0]   
// he not gets array type . actual array is an object type *****

// number of array 
const numberArray:number[] =[1,3,4,9,0,2,3,4,5,0] 
// alawys push number , never push string and others 
// numberArray.push("hello") error 
numberArray.push(5)

// string array 
const friends:string[] = ["a", "b","c"]
friends.push("tansim")


// tuple types 
const tupleData:[string,number,boolean] = ["tansim",21,true]

// tupleData[0]=552 error  because  order maintain and type maintain
tupleData[0]= "ahmed"








