"use strict";
// string 
const stringValue = "tansim";
// number 
const numberValue = 5475;
// boolean
const booleanValue = false;
// undefined 
const undefinedType = undefined;
// null 
const nullValue = null;
// let d ; now d is any. he gets any of type 
let d;
d = 123;
// object 
const info = {
    name: "nai",
    bari: "nai"
};
// array 
const arrayValue = [1, 3, 4, 9, 0, 2, 3, 4, 5, 0];
// he get object value because Array is object of Array 
// const arrayNewValue:Array =[1,3,4,9,0,2,3,4,5,0]   
// he not gets array type . actual array is an object type *****
// number of array 
const numberArray = [1, 3, 4, 9, 0, 2, 3, 4, 5, 0];
// alawys push number , never push string and others 
// numberArray.push("hello") error 
numberArray.push(5);
// string array 
const friends = ["a", "b", "c"];
friends.push("tansim");
// tuple types 
const tupleData = ["tansim", 21, true];
// tupleData[0]=552 error  because  order maintain and type maintain
tupleData[0] = "ahmed";
// object data ts  =====>>
let user = {
    firstName: "tansim",
    middleName: "ahmed",
    lastName: "tashdid",
    age: 12,
};
// user.lastName="hello"
