// import React  from "react";
// import { Todos } from "./Todos";

// export const TodoInput = () => {
//     const [text, setText] = React.useState('');
//     const [todo, setTodo] = React.useState([]);


//     const handleAdd = () => {
//         if (text.trim() === '') return;

//         const data = {
//             id: Date.now(),
//             text,
//             isEdits: false,
//             isCompleted: false,
//         };

//         setTodo((prev) => [...prev, data]);
//         console.log('todo: in function', todo);
        
//     };
//     console.log('todo:out of function', todo);

//     return (
//         <>
//         <input type="text" onChange={(e) => setText(e.target.value)} />

//             <button onClick={handleAdd}>Add</button>
//             <Todos props={{ todo}} />

//             <label ></label>
//             <input type="checkbox"></input>
//             <button>edit</button>
//             <button>delete</button>
        
//         </>
//     );

// };


// new code

import React from "react";
import { Todos } from "./Todos";


export const TodoInput = () => {
  const [text, setText] = React.useState("");
  const [todo, setTodo] = React.useState([]);

  const handleAdd = () => {
    if (text.trim() === "") return;

    const data = {
      id: Date.now(),
      text,
      isEdit: false,
      isCompleted: false,
    };

    setTodo((prev) => [...prev, data]);
    setText("");
  };

  // DELETE
  const handleDelete = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  // TOGGLE EDIT MODE
  const handleEditToggle = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isEdit: !item.isEdit } : item
      )
    );
  };

  // UPDATE TEXT
  const handleEditChange = (id, value) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, text: value } : item
      )
    );
  };

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.isEdit ? (
              <input
                type="text"
                value={item.text}
                onChange={(e) =>
                  handleEditChange(item.id, e.target.value)
                }
              />
            ) : (
              <span>{item.text}</span>
            )}

            <button onClick={() => handleEditToggle(item.id)}>
              {item.isEdit ? "Save" : "Edit"}
            </button>

            <button onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
