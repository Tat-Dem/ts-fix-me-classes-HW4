class BankAccount {
    balance: number

    constructor(initialAmount: number) {
        this.balance = initialAmount;
    }

    deposit(amount: number): number {
        this.balance += amount;
        return this.balance;
    }
    withdraw (amount: number): number{
        if (this.balance >= amount){
            this.balance -= amount;
        } else {
            console.log('Insufficient funds.');
        }
        return this.balance;
    }
}

const myAccount = new BankAccount(500);
console.log(myAccount.deposit(100)); // After fixing: will print 600
console.log(myAccount.withdraw(200)); // After fixing: will print 400
console.log(myAccount.withdraw(500)); // After fixing: will print 'Insufficient funds.'
