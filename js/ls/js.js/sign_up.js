const storeData = JSON.parse(localStorage.getItem('userData')) || [];

//nlet location = window.location.pathname;
// console.log('location', location);

const signUp = () => {
    let userName = document.getElementById('signUsername').value.trim();
    console.log('userName', userName);
    
    let age = document.getElementById('SignAge').value.trim();
    console.log('age', age);
    let password = document.getElementById('signPassword').value.trim();
    console.log('password', password);
    
    let singlePersonData = {
        user: userName,
        age,
        pass: password
    };
    storeData.push(singlePersonData);

    localStorage.setItem('userData', JSON.stringify(storeData));

    setTimeout(() => {
        alert('data save successfully');
        window.location = '.ls/pages/Login.html';

    }, 100);
    
};
