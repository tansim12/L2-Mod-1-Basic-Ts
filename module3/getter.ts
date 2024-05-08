{
  //
  // getter modifier

  class BankAccount {
    constructor(
      readonly id: number,
      public name: string,
      protected _balance: number
    ) {}

    // Getter for current balance
    public get currentBalance(): number {
      return this._balance;
    }

    // setter  new balance 
    public set addBalance(amount : number) {
        this._balance = this._balance + amount;
    }
    
  }

  const account1 = new BankAccount(22, "tansim", 253);
  
  const resultAddBalance = account1.addBalance =34; // set the add balance
  const resultCurrentBalance = account1.currentBalance; // Get the current balance

  console.log(resultAddBalance);
  console.log(resultCurrentBalance);
  

  //
}
