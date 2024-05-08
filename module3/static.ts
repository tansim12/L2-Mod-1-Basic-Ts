{
  //

  class Counter {
   static count: number = 0;
   constructor(public name:string){}

   static add(amount: number):string {
    const newAmount = Counter.count = Counter.count + amount
      return `${this.name} current money is ${newAmount}`;
    }
  }

// problem is  Counter current money is 25 এইটা আসলো কেন ?  tansim current money is 25 আসলো না কেন ? নাম টা আনার জন্য কি করা লাগবি 


  const instance1 = new  Counter("tansim")
  console.log(instance1.name);

  console.log(Counter.add(25));
 
//   const instance2 = new Counter("ahmed")
  console.log(Counter.add(25));

  














  //
}