// normal fn

function add(num1: number, num2: number = 100): number {
  return num1 + num2;
}
add(2, 2);

// arrow fn

type Add2 = (n1: number, n2: number) => number;
const add2: Add2 = (n1, n2) => n1 + n2;
add2(2, 32);

// object ---- function --- method
const poorUser: {
  name: string;
  balance: number;
  totalBalance(oldBalance: number): string;
} = {
  name: "tansim",
  balance: 0,
  totalBalance(oldBalance: number): string {
    return `MY Current Balance is ${this.balance + oldBalance}`;
  },
};

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
arr.map((i: number): number => i * i);
