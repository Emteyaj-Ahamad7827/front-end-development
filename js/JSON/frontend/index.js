let data;

const API = 'https://jsonplaceholder.typicode.com/todos';

function myTodosAdd(){
    const todoText = document.querySelector('#todos').value;
    console.log('todotext:', todoText);

    console.log('data:', data);

    if (todoText.trim() === '') return;

    let newTodos = {
        id: +data.lengt +1,
        text: todoText,
        isEdit:false,
        isCompleted:false,
    };

    fetch(API, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',

        },
        body: JSON.stringify(newTodos),

    })
    .then((res) => console.log('this is from addTodo', res))
    .then(() => alert('data has been sent '))
    .catch((err) => console.log('this is from addTodo', err))
    .finally(() => console.log('done with api process'));
       
}

function fetchTodosDB() {
    fetch(API)
    .then((res) => res.json())
    .then((res) => (data = [...res]))
    .catch((res) => console.log(err));
    
}