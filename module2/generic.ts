{
  //
  //    generic  মানে dynamic vabe type nibe

  type GenericType<T> = Array<T>; // T means Type . T is an argument

  //   const arrayNumber: Array<number> = [1, 2, 3];
  //   const arrayString: Array<string> = ["tansim", "ahmed"];
  //   const arrayObject: Array<object> = [
  //     { name: "tansim", age: 21 },
  //     { name: "ahmed", age: 22 },
  //   ];

  //   dynamic  generate
  const arrayNumber: GenericType<number> = [1, 2, 3];
  const arrayString: GenericType<string> = ["tansim", "ahmed"];
  const arrayObject: GenericType<{
    readonly name: string;
    age: number;
  }> = [
    { name: "tansim", age: 21 },
    { name: "ahmed", age: 22 },
  ];

  //   generic tuple

  type GenericTuple<X, Y, Z> = [X, Y, Z];
  type GenericUser<x, y> = [x, y];

  // normal tuple
  const info: GenericTuple<string, number, string> = ["tnsim", 22, "pabna"];

  const user: GenericUser<
    number,
    {
      name: string;
      home: string;
    }
  > = [
    21,
    {
      name: "tansim",
      home: "pabna",
    },
  ];

  //
}
