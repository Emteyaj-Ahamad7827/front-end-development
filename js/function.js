let number_1=10;
let number_2=5;

function anualDay1(a,b){
    console.log(a)
    if(a>b){
        return'this is the greater than b and the value of a is ${a}';
    }
    else{
        return 'this is the greater than a ant the value of a is  ${b}';
    }
}

let ans = anualDay(number_1,number_2);
console.log('ans' , ans);



let number_1=10;
let number_2=5;

const anualDay1=(a,b) =>{
    console.log(a)
    if(a>b){
        return'this is the greater than b and the value of a is ${a}';
    }
    else{
        return 'this is the greater than a ant the value of a is  ${b}';
    }
}

let ans = anualDay(number_1,number_2);
console.log('ans' , ans);


//immutable primitive data type (call by value)
let name1='mehfooz';
let number=22
let ans1=number[0]
console.log('ans1:',ans1)


let ans=name1[0];
console.log('ans:', ans)


ans="s";
console.log('ans:', ans)

console.log('name1:', name1)

let name=" khan";
console.log('name:', name);


// mutable ---> non-primitive data type


let arr=[1, 2, 3, 4,];

arr[0]=8;
console.log('---> ~ arr:', arr)