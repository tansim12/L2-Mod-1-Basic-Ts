{
  //
  // abstraction  ====> মানে আমরা কিছু টা ধারনা পাবো । but সম্পূর্ণ কাজ class ar method এর মধ্যে হবে


//   leader interface 
  interface Vehicle1 {
    startEngine(time: number): void;
    stopEngine(time: number): void;
    move(time: number): void;
  }

  class Car implements Vehicle1 {
    startEngine(time: number): void {
      return console.log(`start engine ${time}`);
    }
    stopEngine(time: number): void {
        return console.log(`Stop engine ${time}`);
    }
    move(time: number): void {
        return console.log(`Move engine ${time}`);
    }

    test(){
        return console.log("I am testing");
        
    }
  }

  const instanceCar = new Car()
  instanceCar.startEngine(25)

  //
}
