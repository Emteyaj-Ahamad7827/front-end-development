// Q1- Check is a number is even or odd.


let num1 = 7;
if(num1 % 2 == 0){
    console.log("even number");
} else{
    console.log("odd number");
};


// Q2- Check if a number is positive, negative or zero.

let num = -0;
if(num >0){
    console.log("positive");
    
} else if (num < 0){
    console.log("negative");

} else {
    console.log("zero")
};

//Q3- find the greater 






// Switch case

let value = 'false';
switch(value){
    case true:
console.log("true")
break;
case false:
    console.log("false");
    break;
    default:
        console.log("default");
        break;
    
};

// for loop

let item =10;
for(let i =1; i<=item;
    i++){
        console.log(i);
        
    }


// while loop

let end = 100;
let start =1;
// while(start <= end)
// {
//     console.log("while",start);
//     start++;
    
// };


// do while loop
// do
// {
//     console.log(start);
//     start++;
//     console.log
    
// }


// function 
function sum(){
let number1 = 14;
let number2 = 16;
// console.log(number1+number2);
return number1+number2

}
console.log(sum());

// function 2
function sub(){
    let number3 = 20;
    let first_function = sum();
    let finalAns = first_function- number3;
    return finalAns
}
let ansSub = sub();
console.log(ansSub);


