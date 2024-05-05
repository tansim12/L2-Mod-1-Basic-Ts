"use strict";
{
    // spared operator  of object
    const mentor1 = {
        next: "tonmoy",
        redux: "mir",
    };
    const mentor2 = {
        dbms: "mizan",
        cloud: "ami nijei",
    };
    const allMentor = Object.assign(Object.assign({}, mentor1), mentor2);
    // spared operator by array 
    const f1 = ["tansim", "ahmed", "tashdid"];
    const f2 = ["sojib", "joy", "soykot"];
    f1.push(...f2);
    const newF3 = [...f1, f2];
    // rest operator 
    const printFDName = (...friends) => friends.forEach(element => {
        return `Hi ${element}`;
    });
    printFDName("tansim", "ahmed", "tashdid");
}
