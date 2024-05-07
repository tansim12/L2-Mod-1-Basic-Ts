{
  //
  // modifier access control such as : public , readonly , private, protect etc

  class BankAccount {
    constructor(
      readonly id: number,
      public name: string,
      protected _balance: number
    ) {}
    //   method
    // add balance

    addBalance(amount: number) {
      this._balance = this._balance + amount;
    }

    currentBalance() {
      return this._balance;
    }
  }
  // child
  class TansimBankAccount extends BankAccount {
    // when _balance is private then  _balance not access other child  but  protected _balance then all child access this property
    
    
  }

  const account1 = new BankAccount(22, "tansim", 253);
  const resultAddBalance = account1.addBalance(25);
  const resultCurrentBalance = account1.currentBalance();

  console.log(resultCurrentBalance);

  //
}
