{
  //

  // generic function

  //   1st way
  interface ArrayFn<T> {
    (value: T): T[];
  }

  interface GenericObj {
    name: string;
    age: number;
  }

  const arrayFn: ArrayFn<number> = (value) => [value];
  const result1 = arrayFn(1);
  const arrayFn2: ArrayFn<GenericObj> = (value) => [value];
  const result2 = arrayFn2({
    name: "tansim",
    age: 21,
  });

  //   2nd way
  const genericFn = <T>(value: T): T[] => [value];
  const genericResult1 = genericFn<number>(2);
  const genericResult2 = genericFn<GenericObj>({
    name: "tansim",
    age: 21,
  });

  const genericFn2 = <T, Q>(param1: T, param2: Q): [T, Q] => [param1, param2];

  const resultFn2 = genericFn2<GenericObj, number[]>(
    {
      name: "tansim",
      age: 21,
      // roll:256  // এই খান এ রোল এ এররর দেচ্ছে ।
    },
    [1, 2, 3]
  );

  interface StudentInfo {
    name: string;
    roll: number;
    isGood: boolean;
  }

  const studentDetails = <T>(student: T) => {
    const course = "level 2";
    return {
      ...student,
      course,
    };
  };
  const studentInfo1 = {
    name: "tan",
    roll: 25,
    isGood: true,
    isBike: true, // isBike তো error deyar kotha ... but keno dilo na
  };
  const student1 = studentDetails<StudentInfo>(studentInfo1)  //isBike তো error deyar kotha ... এইখান এ দিচ্ছে না  কারন  studentInfo1 ta কে typeScript parse korte partese na 

  // const student1 = studentDetails<StudentInfo>({
  //   name: "tan",
  //   roll: 25,
  //   isGood: true,
  //   isBike: true, // isBike তো error deyar kotha ... এখন দিচ্ছে
  // });

  //
}
