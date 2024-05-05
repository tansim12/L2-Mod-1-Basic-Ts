"use strict";
// normal fn
function add(num1, num2 = 100) {
    return num1 + num2;
}
add(2, 2);
// arrow fn
const add2 = (n1, n2 = 100) => n1 + n2;
add2(2, 32);
// object ---- function --- method
const poorUser = {
    name: "tansim",
    balance: 0,
    totalBalance(oldBalance) {
        return `MY Current Balance is ${this.balance + oldBalance}`;
    },
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.map((i) => i * i);
