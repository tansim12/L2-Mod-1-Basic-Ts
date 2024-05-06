{
  //

  // constraints  মানে জোর করা

  interface StudentInfo {
    name: string;
    roll: number;
    isGood: boolean;
  }

  const studentDetails = <T extends { id: number; name: string }>(
    student: T
  ) => {
    const course = "level 2";
    return {
      ...student,
      course,
    };
  };
  const studentInfo1 = {
    id: 25,  // id dite ei  hobe .. must 
    name: "tan",
    roll: 25,
    isGood: true,
    isBike: true, 
  };

  const result1 = studentDetails(studentInfo1);

  //
}
