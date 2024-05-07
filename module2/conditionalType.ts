{
  //
  // conditional type  এইটা আরেকটা টাইপ এবং তার টাইপ এর ভালু এর উপরে নির্ভর করে

  type a1 = null;
  type b1 = a1 extends null ? true : false;

  interface IHave {
    phone: string;
    computer: string;
    home: string;
  }

  type checked<T> = T extends keyof IHave ? true : false;

  type isHome = checked<"home">;
  type isCar = checked<"car">;



  interface IHave2 {
    phone: string;
    computer: string;
    home: string;
  }

type Checked2 <T> = T extends keyof IHave2  ? true: false 

type isHome2 = Checked2<"home">





interface person {
  name: string,
  age:number
}

type IsExist <T> = T extends keyof person ? true:false

type checked3 = IsExist<"name">







  //
}
