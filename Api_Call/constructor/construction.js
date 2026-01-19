// what is construction

// basically what 'new' keyword/operator does create instance o a user defined object type on one of the built-in object type that has a constructor function.


// e.g constructor function

// function Car(maker, model, year){
//    this.maker = maker,
//     this.model = model,
//     this.
    
    
//     year  = year 
// }

// const car = new Car('toyota', 'toyota', 1999);


// let Person = {
//     name: "mohan"
// };
// function myFunction(age,city) {
//     this.age = age;
//     this.city = city;
// }

// myFunction.call(Person, 24, "pune")

// console.log(Person);


// construction with class call, apply, bind

let person = {
    name: 'rahul'
}

class PersonDetails {
    constructor(age, city){
        ((this.age = age), (this.city = city));
    }
}
 Object.assign(person, new PersonDetails(90, 'mumbai'));
 console.log(person);
 





















