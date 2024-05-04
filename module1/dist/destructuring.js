"use strict";
{
    // object destructuring
    const mySelf = {
        age: 21,
        address: {
            home: "pabne",
            upzela: "pabna",
            village: "mohendropur",
        },
    };
    const { age, address: { village: bari } } = mySelf;
    // address:{village:bari} bari is  এলিয়াস এইখানে কোন type দিক্লিয়ার করা যাবে না 
}
