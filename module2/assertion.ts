{
  //
  let myName: any;

  myName = "tansim";

  (myName as string).length; //  আমি যদি বলে দিই  এইটা string তাইলে string aএর সব method dibe .




  type KGTO= (value: string | number) => number | undefined |string;

  const kgToGm:KGTO= (value) => {
    if (typeof value === "string") {
      const convert = parseFloat(value) * 1000;
      return convert;
    } else if (typeof value === "number") {
      const convert = value * 1000;
      return convert;
    }
  };

  const result1  = kgToGm(1000) as number
  const result2  = kgToGm("1000") as string   // অন্ধ বিশ্বাস করা যাবে না  string dile string  number dile number 


type CustomErrorMessage ={
    message:string
}

try {
    
} catch (error) {
    console.log((error as CustomErrorMessage)?.message);
    
}




  //
}
