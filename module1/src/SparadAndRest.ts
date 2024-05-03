{
  // spared operator  of object
  const mentor1: {
    next: string;
    redux: string;
  } = {
    next: "tonmoy",
    redux: "mir",
  };
  const mentor2: {
    dbms: string;
    cloud: string;
  } = {
    dbms: "mizan",
    cloud: "ami nijei",
  };
const allMentor ={...mentor1, ...mentor2}

// spared operator by array 
const f1:string[] =["tansim", "ahmed", "tashdid"]
const f2:string[] =["sojib", "joy", "soykot"]

f1.push(...f2)
const newF3: (string | string[])[] = [...f1,f2]



// rest operator 

const printFDName =(...friends:string[])=> friends.forEach(element => {
    return `Hi ${element}`
});

printFDName("tansim", "ahmed", "tashdid")


}
