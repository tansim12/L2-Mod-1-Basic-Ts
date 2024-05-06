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

  //
}
