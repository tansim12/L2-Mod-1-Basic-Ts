{
  //

  // OOP -- Class =====>
  class Person {
    // public is a parameter property
    constructor(public name: string, public age: number, public home: string) {}

    // info is a method
    info() {
      console.log(
        `Hi my name is ${this.name}. I am ${this.age} years old. I leave in ${this.home} `
      );
    }
  }

  const TansimInfo = new Person("Tansiim Ahmed ", 21, "pabna");
  const sojibInfo = new Person("Sojib islam ", 25, "kazir bazar");
  TansimInfo.info();
  sojibInfo.info();

  //
}
