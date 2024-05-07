{
  //
  // mapped types

  const arrNb: number[] = [1, 2, 3];
  const arrStr: string[] = arrNb.map((i) => i.toString());
  console.log(arrStr);

  interface BoxValueNumber {
    height: number;
    width: number;
  }
  // type Height = BoxValueNumber["height"]

  // this is  mapped type
  type BoxValueString<T> = {
    [key in keyof T]: T[key];
  };

  const box: BoxValueString<{ height: number; width: string }> = {
    height: 25,
    width: "25",
  };

  interface Area {
    height: number;
    width: string;
    isTrue: boolean;
    squire?: number;
  }

  type AreaToGeneric<T> = {
    [key in keyof T]: T[key];
  };

  const areaDetails: AreaToGeneric<Area> = {
    height: 25,
    width: "25",
    isTrue: false,
    squire: 266989,
  };

  type MyInfo = {
    name: string;
    age: number;
    role: string;
  };

  type MyInfoChangeToString<T> = {
    [key in keyof T]: T[key];
  };

  type Change = MyInfoChangeToString<MyInfo>;

  //
}
