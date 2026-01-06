let store = JSON.parse(localStorage.getItem('todoDataBase')) || [];
const addTodo = () => {
    const valueText = document.getElementById('todo').value;
    let todoDetails = {
        id: Date.now(),
        textTodo: valueText,
        isEdit: false,
        isCompleted: false,
    };

    store.push(todoDetails);
    console.log(typeof store);
    localStorage.setItem('todoDataBase', JSON.stringify(store));
    renderOnUI(store);

};

const renderOnUI = (data = store) => {
    const mainDiv = document.getElementById('todo_list');
    mainDiv.innerHTML = '';

    data.map((el, i) => {
        const checkBox = document.createElement('input');
        const text = document.createElement('h3');

        const childDiv = document.createElement('div');

        const btn_edit = document.createElement('button');
        const btn_delete = document.createElement('button');
        const btn_filter = document.createElement('filter');

        btn_edit.innerText = 'edit';
        btn_delete.innerText = 'delete';
        btn_filter.innerText = 'filter';

        checkBox.type = 'checkbox';
        childDiv.className = `div-${i + 1}`;

        text.innerText = el.textTodo;

        // ! delete functionality

        btn_delete.addEventListener('click', () => {
            let deleteStore = data.filter((dl) => dl.id !== el.id);
            store = deleteStore;
            renderOnUI(store);
        });

        // & edit functionality

        btn_edit.addEventListener('click', () => {
            console.log('store in edit func before algo start', store);
            let editStore = data.map((es) =>
                es.id === el.id ? { ...es, isEdit: !es.isEdit } : es
        );
        store = editStore;
        renderOnUI(store);
        console.log('store in edit func', store);

        });

        childDiv.append(checkBox, text, btn_edit, btn_delete);

        mainDiv.append(childDiv);


    });
};