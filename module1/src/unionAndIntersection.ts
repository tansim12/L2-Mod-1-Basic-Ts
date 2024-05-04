{
  //
  // union type
  type User = {
    name: string;
    friends?: string[];
    gender: "male" | "female";
    bloodGroup: "B+" | "O+" | "AB+";
  };

  const user1: User = {
    name: "tansim",
    bloodGroup: "AB+",
    gender: "male",
  };

  
  //  intersection
  type FrontendDeveloper = {
    skill: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skill: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper1 = FrontendDeveloper & BackendDeveloper;
  type FullStackDeveloper2 = FrontendDeveloper | BackendDeveloper;

  const fullstackDeveloper: FullStackDeveloper1 = {
    skill: ["css", "html"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
  const fullstackDeveloper2: FullStackDeveloper2 = {
    skill: ["css", "html"],
    designation1: "Frontend Developer",
  };

  //
}
