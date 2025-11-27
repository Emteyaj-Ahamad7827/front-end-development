// printing string
let str = "apna college";
// let str1 = 'apna college';
console.log(str[9]);

// template literals
let specialString = `this is a template literal`;
console.log(specialString, typeof specialString);

let obj = {
    item: "pen",
    price: 10,
};
// print as template literals (``)
let output = `this pen is ${obj.item} is ${obj.price} rupees`;
console.log(output);

// normal print
console.log("this pen is", obj.item, "is", obj.price, "rupees");
