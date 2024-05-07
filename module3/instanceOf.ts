{
    //

    // instanceof 

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

    //   friend sojib 
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

      

      const getFriend =(friend:Friend)=>{
        if (friend instanceof Sojib) {
         friend.workingInfo("bodundhora tuse 222")
        } else if (friend instanceof Tansim) {
         friend.girlFriend("saiya 222")
        } else {
         console.log("kusu nai .....");
         
        }
       }
    
      const tanResult = new Tansim("tansim", 21, "pabna" , "dhaka")
    //   tanResult.girlFriend("sadiya")
    
      const sojResult = new Sojib("sojib",25,"mujahid club", "sujanogor")
    //   sojResult.workingInfo("bosundhora tisue")


  


getFriend(sojResult)
getFriend(tanResult)
















    //
}