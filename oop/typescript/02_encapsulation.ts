/* Hiding internal state and requiring all interaction to be performed through methods.
 * Achieved using access modifiers: private, protected, public.
 * */

class BankAccount {
  private balance: number = 0; // only accessible inside the class

  deposit(amount: number) {
    if (amount > 0) this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
// acc.balance = 9999; // ❌ Error: balance is private
console.log(acc.getBalance()); // ✅ 1000
