const storeData = JSON.parse(localStorage.getItem('userData')) || [];


const signUp= () => {
    let userName = document.getElementById(signUsername).value.trim();
    console.log('userName', userName);

    let age = document.getElementById('SignAge').value.trim();
    console.log('age', age);

    let password = document.getElementById('signPassword').value.trim();
    console.log(password);

let singlePersonData = {
    user: userName,
    age,
    password: password,
};

storeData.push(singlePersonData);

localStorage.setItem('userData', JSON.stringify(storeData));

setTimeout(() =>{
    alert('data save to sucessfully');
    window.location ='/Api_Call/promise/local_storage/signup.htm'
}, 100);

 
};