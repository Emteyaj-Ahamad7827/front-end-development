// let num1 = 3;
// let num2 = 2;
// console.log(num1 !== num2);

// let num1 = 3;
//  let num2 = 4;
//  console.log(num1 !== num2);


// console.log(num1 + num2);

// Name = "emeyaj";
// console.log(Name);

// OPERATORS IN JS

// ARITHMETIC OPERATORS
let num1 = 3;
 let num2 = 4;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);

// ASSINGMENT OPERATORS 


 let name = "Emteyaj Ahamad";
 let age = 24;
 let married = false;
 console.log(name);

// COPMPARISON OPERATORS

let num3 = 3;
console.log('num3;', typeof num3);

let num4 = 5;
let num5 = 6;
console.log('checking value;', num4 !==num5);

// LOGICAL OPERATORS

let num7 = 3;
let num8 = 3;
let num9 = 3;
let num10 = 3;
// console.log(||);
console.log(num7 == num8+1 && num9 == num10);
console.log(true && true);

// for loop
for (let i = 1; i <=10; i++) {
    console.log("emteyaj ahmad");
}

// while loop
let count = 1;
while(count <=5){
    console.log("current count:", count);
    count++;
}

// print all even number 0 t0 100

for ( let i = 0; i <=100; i++) {
    if(i%2 !== 0){
    console.log("number:", i)
    }
};

// create a game where you start with any random game number. Ask the user to keep guessing the game number until the user events correct value.

let gameNum = 30;
let userNum = prompt("Guess the game number : ");
while (userNum != gameNum) {
    userNum = prompt("you enterd the wrong number, Guess agian");

}
console.log("congratulations, you entered the right number");