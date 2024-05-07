{
  //

  // keyOf generic constraint

  interface vehicle {
    car: string;
    bus: string;
    jeep: string;
  }
  type Owner1 = keyof vehicle;
  type Owner2 = "car" | "bus" | "jeep";

  const persion1: Owner1 = "car";

  // generic constrainKeyOf
  const user = {
    name: "tansim",
    age: 21,
    isGood: true,
    home: "pabna",
  };

  interface User {
    name: string;
    age: number;
    isGood: boolean;
    home: string;
  }
  const user2 = {
    name: "tansim",
    college: "DCC",
    roll: 1958,
  };

  interface User2 {
    name: string;
    college: string;
    roll: number;
  }

  const genericKeyOfFn = <O, K extends keyof O>(obj: O, key: K) => {
    return obj[key]; // এইখান এ  [key] কে index dhore nibe tai  K extends keyof O  করে দিতে হবে যে এইটা অব্জেত এর key
  };
  const resultFn1 = genericKeyOfFn<User, keyof User>(user, "age");
  const resultFn2 = genericKeyOfFn<User2, keyof User2>(user2, "roll");

  type Person {
    name:string,
    age:number,
    isGood:boolean
  }
  const person ={
    name:"ts",
    age:25,
    isGood:true
  }

  const getObjKeyValue  = <O,K extends keyof O> (obj:O , Key:K)=>{
    return obj[Key]
  }

  const personResult = getObjKeyValue<Person, keyof Person>(person,"age")

  //
}
