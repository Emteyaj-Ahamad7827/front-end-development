 // oops
// class Car { 
//     constructor(n, b){
//         this.name = n;
//         this.brand = b;

//     }
//     showDetails() {
//         console.log(`${this.name} ${this.brand}`);
        
//     }
// }

// let c1 = new Car ('desire', 'suzuki');
// console.log(c1);
// console.log(c1.showDetails());

// inherit

// class SUV extends Car {
//     constructor(x, y){
//         super(x,y);
//         this.buyer = "mehfooz_khan"
//     }
// }

// class miniSUV extends SUV{
//     constructor(x,y){
//         super(x, y);
//         this.type = "mini_suv"
//     }
// }

// let car2 = new miniSUV("audi", "audi");
// console.log(car2);


// class Cars {
//     #count
//     constructor(n,b){
//         this.name = n;
//         this.brand = b;
//         this.#count = 100;
//     }

//     showDetails(){
//         console.log(`${this.name} ${this.brand} ${this.#count}`);
        
//     }
//     getCount() {
//         return this.#count;
//     }
// }
//  let c11 = new Cars("Thar", "Mahindra");

//  console.log(c11, "this is the encapsulation");
//  console.log(c11.getCount());
 

// abstraction

let amounts = process.argy[2];
console.log('amounts', amounts);


class BankAccount {
    #balance; // private property
    #Pin; // private property

    constructor(accountHolder){
        this.accountHolder = accountHolder;
        this.#balance = 0;
        this.#Pin = '1234';

    }

    // public method - visible to users
    deposit(amount){
        if (amount > 0){
            this.#balance += amount;
            console.log('deposited ${amount}');
        } else {
            console.log('invalid deposit amount');
            
        }
    }

    // public method - visible to user
    withdraw(amount) {
        if (amount <= this.#balance){
            this.#balance -= amount;
            console.log('Withdraw ${amount}');
            
        } else{
            console.log('Insufficients balance');
            
        }
    }

    // public method to show limited detail
    checkBalance(usePin){
        if(usePin === this.#Pin){
            // console.log('Current balance: ${this.#balance}');
            return 'Current balance: ${this.#balance}';


        } else {
            console.log('Pin galat hai gareed ${usePin}');
            
        }
    }
}

// Create an account
const account = new BankAccount('mehfooz');

account.deposit(amounts);
account.withdraw(400);
let checkBal = account.checkBalance(1234);
console.log('checkBal', checkBal);
