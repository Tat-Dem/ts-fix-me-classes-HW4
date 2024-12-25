class BankAccount {
    balance: number

    constructor(initialAmount: string) {
        //balance = initialAmount
    }

    deposit(amount: number): number {
        this.balance
        return 0
    }
}

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100)) // After fixing: will print 600
