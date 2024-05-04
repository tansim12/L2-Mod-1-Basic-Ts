{
  //

  // tarnary operator

  const age: number = 18;
  //   console.log(age >= 18 ? "adult" : "baccha");

  //   nullish coalescing operator

  // always  decision making  (null and undefined)   শুধু মাত্র null and undefined এর উপরে কাজ করবে
  // const isAuthentiked = ""
  const isAuthentiked = null || undefined;
  const result1 = isAuthentiked ?? "Gust"; // ?? is using nullish coalescing
  const result2 = isAuthentiked ? isAuthentiked : "Gust";
  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      home: string;
      permanentAddress: string | null
    };
  };

  const user: User = {
    name: "tansim",
    address: {
      home: "pabne",
      permanentAddress: null,
    },

  };

  const isPermanent = user?.address?.permanentAddress ?? "Bari nai"
  console.log({isPermanent});
  


  //
}
