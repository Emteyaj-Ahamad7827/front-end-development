// const storeData = JSON.parse(localStorage.getItem('userData')) || [];


// const signUp= () => {
//     let userName = document.getElementById(signUsername).value.trim();
//     console.log('userName', userName);

//     let age = document.getElementById('SignAge').value.trim();
//     console.log('age', age);

//     let password = document.getElementById('signPassword').value.trim();
//     console.log(password);

// let singlePersonData = {
//     user: userName,
//     age,
//     password: password,
// };

// storeData.push(singlePersonData);

// localStorage.setItem('userData', JSON.stringify(storeData));

// setTimeout(() =>{
//     alert('data save to sucessfully');
//     window.location ='/Api_Call/promise/local_storage/signup.htm'
// }, 100);

 
// };


// new code 




//let locations = window.location.pathname; // route -> reacr-router-dom -> useLocation -> useSearchParam -> useParam

const storeData = JSON.parse(localStorage.getItem('userData'));

const Login = () => {
  let userName = document.getElementById('loginUsername').value.trim();
  console.log('🚀 ~ userName:', userName);
  let password = document.getElementById('Loginpassword').value.trim();

  let findUser = storeData.find((el) => el.user === userName);

  if (findUser !== undefined) {
    if (findUser.pass !== password) {
      alert("password dosen't match!❌");
      return;
    }
    let random = function () {
      return Math.random().toString(36).substr(2); // remove `0.`
    };

    let token = function () {
      return (
        random() + random() + random() + '-' + random() + random() + random()
      ); // to make it longer
    };

    sessionStorage.setItem('token', JSON.stringify(token()));

    setTimeout(() => {
      alert('token has been stored in session storage✅');
    }, 1000);
  }
};


// det-bcdv-pck