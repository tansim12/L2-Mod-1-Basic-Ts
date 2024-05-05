{
  //

  // type alias vs interface

  //   alias
  type UserAlias = {
    name: string;
    age: number;
  };
  //   const user: UserInterface = {
  //     name: "tansim",
  //     age: 22,
  //   };

  interface UserInterface {
    // premetive data not use interface
    name: string;
    age: number;
  }

  //   const user: UserAlias = {
  //     name: "tansim",
  //     age: 22,
  //   };

  type UserAlias2 = UserAlias & { role: number }; // intersection (&) দিয়ে আগের গুলার সাথে আরও কিছু add korsi
  //   const user: UserAlias2 = {
  //     name: "tansim",
  //     age: 22,
  //     role:25
  //   };

  interface UserInterface2 extends UserInterface {
    // extends দিয়ে ভালুএ গুলা অ্যাড করতে হবে
    role: number;
  }

  //   const user: UserInterface2 = {
  //     name: "tansim",
  //     age: 22,
  //     role:25
  //   };

  // array এর জন্য
  type RollAlias = number[];
  // const roll:RollAlias = [1,2,3]

  // array এর জন্য  interface
  interface RollInterface {
    [index: number]: number; // [] এর index গুলা নাম্বার  তাই এই ভাবে করতে হবে
  }
  const roll: RollInterface = [1, 2, 3]; // [] এর index গুলা নাম্বার

  // function এর জন্য interface

  interface AddInterface {
    (num1: number, num2: number): number;
  }

  const add: AddInterface = (num1, num2) => {
    return num1 + num2;
  };


  
  //
}
