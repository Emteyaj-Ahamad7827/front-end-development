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