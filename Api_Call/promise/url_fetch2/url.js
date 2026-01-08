const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

window.onload() = function () {
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((res) => console.log('this is the data: res', res))
    ;
    
}