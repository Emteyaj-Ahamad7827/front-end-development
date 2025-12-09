// const API = 'https://jsonplaceholder.typicode.com/todos';
const API = 'https://fakestoreapi.com/docs#tag/Products';

// sync way handle promise

function ApiCall(){
    console.log('zero');

    let res = fetch(API)
    .then((res) => res.json())
    .then((res) => console.log('first', res))
    .catch((err) => err);
    console.log('second', res);
    
    
};
ApiCall();


// async way handle promise

// async function ApiCall() {
//     let res = await fetch(API);
//     let data = await res.json();
//     console.log('data', data);
//     console.log('res', res);    
// };
// ApiCall();

