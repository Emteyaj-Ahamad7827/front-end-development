let n1 = 3
let n2 = 4;

let mul = n1 * n2;
let dev = n1 / n2;
let sum1 = n1 + n2;
let sub1 = n1 - n2;
let expo = n1 ** n2;
console.log('~ expo:', expo);

let num1 = 3;
console.log(' ~ num1:', typeof num1);
let name = "3";
console.log(' ~ num2:', typeof num2);
console.log(' checking value:', num1 !==);

// logical operator//

let num6 = 3;
let num2 = 3;
let num4 = 3;
let num5 = 3;
console.log('~ or operator: (||)');
console.log(num1 + 1 == num2 && num4 == num5);
console.log(true && true);

console.log(num1 == num2 || num4 !== num5);
console.log(true || false);
let flags = true;
console.log(' flags:', !flags);

// bitwise operators //
// conversion into number to binary and binary to number...

let number = 50; // decimal number
 let binaryConv = number.toString(2);
 
 //conole.log(' binaryconv:', binaryconv);
 
 // binary to num//
 let bin_to_num = parseInt(binaryConv, 2);
 //conole.log(' binarycanv:', bin to num);

// dealing with binary system/number-system

&& -- and 
|| -- or
!  -- not

// # spread and rest operators

let arr = [1, 2, 3, 4];
let newArr = [...arr, 5, 6, 7, 8];