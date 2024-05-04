"use strict";
{
    const student1 = {
        name: "tansim",
        age: 21,
        home: "pabna",
        phoneNo: "011",
        isStudent: true,
    };
    const student2 = {
        name: "joy",
        age: 25,
        home: "pabna",
        phoneNo: "01d4751",
        // isStudent: true,
    };
    const student3 = {
        name: "sojib",
        age: 21,
        home: "pabna",
        phoneNo: "01122",
        isStudent: true,
    };
    const add = (num1, num2) => num1 + num2;
    // problem 1 
    function add2(num1, num2) {
        return num1 + num2;
    }
    // এইখান এ alias কাজ করে না কেন ?
    const add3 = function (num1, num2) {
        return num1 + num2;
    };
    // এইটা তে করা যাই । কারন variable দিয়ে fn দিক্লিয়ার করা হয়ছে ।
    //
}
