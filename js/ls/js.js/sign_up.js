// const storeData = JSON.parse(localStorage.getItem('userData')) || [];

// // let location = window.location.pathname;
// // console.log('location', location);

// const signUp = () => {
//     let userName = document.getElementById('signUsername').value.trim();
//     console.log('userName', userName);
    
//     let age = document.getElementById('SignAge').value.trim();
//     console.log('age', age);
//     let password = document.getElementById('signPassword').value.trim();
//     console.log('password', password);
    
//     let singlePersonData = {
//         user: userName,
//         age,
//         pass: password
//     };
//     storeData.push(singlePersonData);

//     localStorage.setItem('userData', JSON.stringify(storeData));

//     setTimeout(() => {
//         alert('data save successfully');
//         window.location = '.ls/pages/Login.html';

//     }, 100);
    
// };


// new code

const storeData = JSON.parse(localStorage.getItem('userData')) || [];

const signUp = () => {
    let userName = document.getElementById('signUsername').value.trim();
    let age = document.getElementById('SignAge').value.trim();
    let password = document.getElementById('signPassword').value.trim();

    if (!userName || !age || !password) {
        alert('Please fill all fields');
        return;
    }

    storeData.push({
        user: userName,
        age,
        pass: password
    });

    localStorage.setItem('userData', JSON.stringify(storeData));

    alert('Data saved successfully');
    window.location.href = './pages/Login.html';
};
