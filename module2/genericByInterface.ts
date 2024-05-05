{
  //

  // generic interface
  interface Developer<T, X> {
    name: string;
    age: number;
    computer: {
      name: string;
      price: number;
      quantity: number;
    };
    watch: T;
    bike?: X;
  }

  interface PoorWatch {
    name: string;
    price: number;
    quantity: number;
  }
  interface RichWatch {
    name: string;
    price: number;
    date: string;
    location: string;
  }
  interface Bike {
    isBike: boolean;
  }
  const poorDeveloper: Developer<PoorWatch, null> = {
    name: "tansim",
    age: 21,
    computer: {
      name: "ryzen",
      price: 60,
      quantity: 1,
    },
    watch: {
      name: "apple",
      price: 20,
      quantity: 0,
    },
  };
  const richDeveloper: Developer<RichWatch, Bike> = {
    name: "tansim",
    age: 21,
    computer: {
      name: "ryzen",
      price: 60,
      quantity: 1,
    },
    watch: {
      name: "apple",
      price: 20,
      date: "1/01/2023",
      location: "Dhaka",
    },
  };

  //   interface ArrNb {
  //     [index:number]:number
  //   }
  interface ArrNb<T> {
    [index: number]: T;
  }

  interface Obj<T> {
    name: string;
    age: T;
    isGood?: boolean;
  }

  const arrNb1: ArrNb<string> = ["tansim", "ahmed"];
  const arrNb2: ArrNb<Obj<number>> = [
    { name: "tansim", age: 25 },
    { name: "ahmed", age: 5757, isGood: true },
  ];

  //
}
