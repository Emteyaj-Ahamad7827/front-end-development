// const myFuncPromise = (paths) => {
//     const script = document.createElement('script');

//     script.src = [paths];
//     document.head.append(script);

//     setTimeout(() => {
//         test();

//     }, 100);
    
// };
// myFuncPromise('./test.js');


const myFuncPromise = (paths) => {
    return new Promise ((res, rej) =>{
        const script = document.createElement('script');
        script.src = paths;

        document.head.append(script);
        script.onload = function (){
            res('this is loaded');

        };
        script.onerror = function (){
            rej('this is not loaded');
        };
    });
};


// myFuncPromise('./test.js')
// .then((res) => {
//     console.log(res);
//     Test();

// })
// .catch((err) => console.log(err));


async function handleAsync() {
    try {
        let res = await myFuncPromise('./test.js');
        console.log('res', res);
        Test();
    } catch(error) {
        console.log('error', error);
        
    }
    
}

handleAsync();




// new code


// mehfooz nettech
// 10:14 AM
// const result = new Promise((res, rej) => {
//   let dataFound = true;

//   if (dataFound) {
//     res('got the data....');
//   } else {
//     rej('not found the data... ');
//   }
// });

// result.then((res) => console.log(res)).catch((err) => console.log(err));

// mehfooz nettech
// 10:48 AM
// const myFuncPromise2 = (path) => {
//   // inside this promis will create
//   return new Promise(() => {
//     const script = document.createElement('script');

//     script.src = path;
//     document.head.append(script);

//     setTimeout(() => {
//       Test();
//     }, 3000);
//   });
// };

// let value = myFuncPromise2('./Test.js');
// console.log('🚀 ~ value:', value);

// mehfooz nettech
// 10:58 AM
// const myFuncPromise2 = (path) => {
//   // inside this promis will create
//   return new Promise((res, rej) => {
//     const script = document.createElement('script');

//     script.src = path;
//     document.head.append(script);

//     // setTimeout(() => {
//     //   Test();
//     // }, 3000);

//     script.onload = function () {
//       res('data has been loaded ✅');
//     };

//     script.onerror = function () {
//       rej('data lost ❌');
//     };
//   });
// };

// let value = myFuncPromise2('./Test.js');

// // value
// //   .then((res) => {
// //     console.log(res);
// //     Test();
// //   })
// //   .catch((err) => console.log(err));

// async function dataHandle(a) {
//   try {
//     const data = await value;
//     Test();
//     console.log(data);
//     console.log('🚀 ~ a:', a);
//   } catch (err) {
//     console.log('🚀 ~ err:', err);
//   }
// }

// dataHandle('mehfooz');
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Promise</title>
// </head>

// <body>
//     <h1>Promise</h1>
// </body>

// <script src="./newPromise2.js"></script>

// </html>