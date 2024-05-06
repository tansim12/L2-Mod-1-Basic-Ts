{
  //  inheritance ---->

  //   parent class is Person , student and teacher common type
  class Person {
    constructor(public name: string, public age: number) {}
    sleep(hour: number) {
      console.log(`${this.name} his age is ${this.age}. sleeping ${hour}`);
    }
  }

  class Student extends Person {
    constructor(public name: string, public age: number) {
      super(name, age);
    }
  }
  class Teacher extends Person {
    constructor(
      public name: string,
      public age: number,
      public designation: string
    ) {
      super(name, age);
    }

    classInfo(totalClass: number) {
      console.log(
        `${this.name}. He is ${this.designation}. total class count ${totalClass}`
      );
    }
  }

  const studentInfo = new Student("tansim", 21);
  studentInfo.sleep(8);
  const teacherInfo = new Teacher("Mezbha", 30, "developer");
  teacherInfo.classInfo(3);

  //
}
