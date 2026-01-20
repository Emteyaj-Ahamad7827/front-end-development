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


class Cars {
    #count
    constructor(n,b){
        this.name = n;
        this.brand = b;
        this.#count = 100;
    }

    showDetails(){
        console.log(`${this.name} ${this.brand} ${this.#count}`);
        
    }
    getCount() {
        return this.#count;
    }
}
 let c11 = new Cars("Thar", "Mahindra");

 console.log(c11, "this is the encapsulation");
 console.log(c11.getCount());
 