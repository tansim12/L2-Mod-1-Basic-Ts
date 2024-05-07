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

  class Friend {
    constructor(public name: string, public age: number, public home: string) {}

    info(isGood: boolean) {
      console.log(`${this.name} ${this.age} ${this.home}, isGood ${isGood}`);
    }
  }

  class Tansim extends Friend {
    constructor(
      public name: string,
      public age: number,
      public home: string,
      public college: string
    ) {
      super(name, age, home);
    }

    girlFriend(gfName: string) {
      console.log(
        `${this.name} my age ${this.age}. home ${this.home}, my college : ${this.college}. my Gf is ${gfName}`
      );
    }
  }
  class Sojib extends Friend {
    constructor(
      public name: string,
      public age: number,
      public home: string,
      public working: string
    ) {
      super(name, age, home);
    }

    workingInfo(companyName: string) {
      console.log(
        `${this.name} my age ${this.age}. home ${this.home},  I am Working  : ${this.working}. my company is ${companyName}`
      );
    }
  }

  const tanResult = new Tansim("tansim", 21, "pabna" , "dhaka")
  tanResult.girlFriend("sadiya")

  const sojResult = new Sojib("sojib",25,"mujahid club", "sujanogor")
  sojResult.workingInfo("bosundhora tisue")

  //
}
