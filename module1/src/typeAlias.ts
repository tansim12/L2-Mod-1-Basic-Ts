{
  // type Alias

  type Student ={
    name: string;
    age: number;
    home: "pabna";
    phoneNo: string;
    isStudent?: boolean;
}


  const student1:Student = {
    name: "tansim",
    age: 21,
    home: "pabna",
    phoneNo: "011",
    isStudent: true,
  };
  const student2:Student = {
    name: "joy",
    age: 25,
    home: "pabna",
    phoneNo: "01d4751",
    // isStudent: true,
  };
  const student3:Student = {
    name: "sojib",
    age: 21,
    home: "pabna",
    phoneNo: "01122",
    isStudent: true,
  };


//   fn type alias 

type Add =(num1:number,num2:number)=>number
const add:Add =(num1, num2)=> num1+num2


// problem 1 

function add2 (num1:number, num2:number){
  return num1 + num2;
}
console.log(add(2,2));

// এইখান এ alias কাজ করে না কেন ?


const add3: Add = function(num1, num2) {
  return num1 + num2;
};

// এইটা তে করা যাই । কারন variable দিয়ে fn দিক্লিয়ার করা হয়ছে ।



  //
}
