"use strict";
var _a, _b;
{
    //
    // tarnary operator
    const age = 18;
    //   console.log(age >= 18 ? "adult" : "baccha");
    //   nullish coalescing operator
    // always  decision making  (null and undefined)   শুধু মাত্র null and undefined এর উপরে কাজ করবে
    // const isAuthentiked = ""
    const isAuthentiked = null || undefined;
    const result1 = isAuthentiked !== null && isAuthentiked !== void 0 ? isAuthentiked : "Gust"; // ?? is using nullish coalescing
    const result2 = isAuthentiked ? isAuthentiked : "Gust";
    console.log({ result1 }, { result2 });
    const user = {
        name: "tansim",
        address: {
            home: "pabne",
            permanentAddress: null,
        },
    };
    const isPermanent = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "Bari nai";
    console.log({ isPermanent });
    //
}
