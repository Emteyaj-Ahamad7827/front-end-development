// let store = JSON.parse(localStorage.getItem('todoDataBase')) || [];
// const addTodo = () => {
//     const valueText = document.getElementById('todo').value;
//     let todoDetails = {
//         id: Date.now(),
//         textTodo: valueText,
//         isEdit: false,
//         isCompleted: false,
//     };

//     store.push(todoDetails);
//     console.log(typeof store);
//     localStorage.setItem('todoDataBase', JSON.stringify(store));
//     renderOnUI(store);

// };

// const renderOnUI = (data = store) => {
//     const mainDiv = document.getElementById('todo_project');
//     mainDiv.innerHTML = '';

//     data.map((el, i) => {
//         const checkBox = document.createElement('input');
//         const text = document.createElement('h3');

//         const childDiv = document.createElement('div');

//         const btn_edit = document.createElement('button');
//         const btn_delete = document.createElement('button');
//         const btn_filter = document.createElement('filter');

//         btn_edit.innerText = 'edit';
//         btn_delete.innerText = 'delete';
//         btn_filter.innerText = 'filter';

//         checkBox.type = 'checkbox';
//         childDiv.className = `div-${i + 1}`;

//         text.innerText = el.textTodo;

//         // ! delete functionality

//         btn_delete.addEventListener('click', () => {
//             let deleteStore = data.filter((dl) => dl.id !== el.id);
//             store = deleteStore;
//             renderOnUI(store);
//         });

//         // & edit functionality

//         btn_edit.addEventListener('click', () => {
//             console.log('store in edit func before algo start', store);
//             let editStore = data.map((es) =>
//                 es.id === el.id ? { ...es, isEdit: !es.isEdit } : es
//         );
//         store = editStore;
//         renderOnUI(store);
//         console.log('store in edit func', store);

//         });

//         childDiv.append(checkBox, text, btn_edit, btn_delete);

//         mainDiv.append(childDiv);


//     });
// };


// Load data from localStorage
let store = JSON.parse(localStorage.getItem('todoDataBase')) || [];

// Add Todo
const addTodo = () => {
    const input = document.getElementById('todo');
    const valueText = input.value.trim();

    if (!valueText) return alert("Please enter a todo");

    let todoDetails = {
        id: Date.now(),
        textTodo: valueText,
        isEdit: false,
        isCompleted: false,
        isPinned: false,
    };

    store.push(todoDetails);
    localStorage.setItem('todoDataBase', JSON.stringify(store));
    input.value = '';
    renderOnUI();
};

// Render Todos
const renderOnUI = () => {
    const mainDiv = document.getElementById('todo_project');
    mainDiv.innerHTML = '';

    // Show pinned todos first
    const sortedData = [...store].sort(
        (a, b) => b.isPinned - a.isPinned
    );

    sortedData.forEach((el, i) => {
        const childDiv = document.createElement('div');
        const text = document.createElement('h3');
        const checkBox = document.createElement('input');
        const btn_edit = document.createElement('button');
        const btn_delete = document.createElement('button');
        const btn_pin = document.createElement('button');

        // Checkbox
        checkBox.type = 'checkbox';
        checkBox.checked = el.isCompleted;

        checkBox.addEventListener('change', () => {
            store = store.map(item =>
                item.id === el.id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            );
            localStorage.setItem('todoDataBase', JSON.stringify(store));
            renderOnUI();
        });

        // Text
        text.innerText = el.textTodo;
        if (el.isCompleted) {
            text.style.textDecoration = 'line-through';
        }

        // Buttons
        btn_edit.innerText = 'Edit';
        btn_delete.innerText = 'Delete';
        btn_pin.innerText = el.isPinned ? 'Unpin' : 'Pin';

        // Delete
        btn_delete.addEventListener('click', () => {
            store = store.filter(item => item.id !== el.id);
            localStorage.setItem('todoDataBase', JSON.stringify(store));
            renderOnUI();
        });

        // Edit (simple prompt)
        btn_edit.addEventListener('click', () => {
            const newText = prompt('Edit todo', el.textTodo);
            if (newText) {
                store = store.map(item =>
                    item.id === el.id
                        ? { ...item, textTodo: newText }
                        : item
                );
                localStorage.setItem('todoDataBase', JSON.stringify(store));
                renderOnUI();
            }
        });

        // Pin / Unpin
        btn_pin.addEventListener('click', () => {
            store = store.map(item =>
                item.id === el.id
                    ? { ...item, isPinned: !item.isPinned }
                    : item
            );
            localStorage.setItem('todoDataBase', JSON.stringify(store));
            renderOnUI();
        });

        // Style pinned todos
        if (el.isPinned) {
            childDiv.style.border = '2px solid gold';
            childDiv.style.background = '#fff9c4';
        }

        childDiv.style.padding = '10px';
        childDiv.style.margin = '10px 0';

        childDiv.append(checkBox, text, btn_pin, btn_edit, btn_delete);
        mainDiv.append(childDiv);
    });
};

// Initial render
renderOnUI();
