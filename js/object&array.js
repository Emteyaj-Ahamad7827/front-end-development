/// object  [ key value pair]


key object={
    name: 'mehfooz khan',
    age:25,
    marride:"single",
    hobbies:["bgmi","cs","coc"],
    exp:{
        coName:'nilesh and co..',
        desig:"sde1",
        salary:'1 lakh/month'
    },
    myFunc:()=>{
        return this.name;
    }
}
let nnn=object.myFunc();
console.log(nnn);

console.log(object.name);
console.log(object.age);
console.log(object.marride);


for(let key in object){
    console.log('${key} : ${object[key]}');
}



// $ array [idexing]

let arr = [[1,2],3,4,[5]];
let arr1 = ["mehfooz","khan","muzzu"];
let arr2 = [{name:"mehfooz",surname:"khan",nickname:"muzzu"}]

for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}