import { useState } from 'react';

export const Todos = ({ props }) => {
  const [editText, setEditText] = useState('');

  const { todo, setTodo } = props;

  const handleDelete = (id) => {
    const deleteItems = todo.filter((el) => el.id !== id);
    setTodo(deleteItems);
  };

  const handleEdits = (id) => {
    const editItems = todo.map((el) =>
      el.id === id ? { ...el, isEdit: true } : el,
    );
    setTodo(editItems);
  };


  const handleCancel = (id) => {
    const editItems = todo.map((el) =>
      el.id === id ? { ...el, isEdit: false } : el,
    );
    setTodo(editItems);
  };

  const handleConfirm = (id) => {
    if (editText.trim() === '') return;
    const editItems = todo.map((el) =>
      el.id === id ? { ...el, isEdit: false, text: editText } : el,
    );
    setTodo(editItems);
  };

    // handle select all
  const handleSelect = () => {
    const selectedAll = todo.map((el) => {
      return {
        ...el,
        isCompleted: !el.isCompleted,
      };
    });
    console.log('selectedAll', selectedAll);
    console.log('todo.iscompleted:' todo[0].isCompleted);
    setTodo(selectedAll);
  };

  const handleSelectedDelete = () => {};

  const changeInput = (id) => {
    const changeValue = todo.map((el) =>
    el.id === id ? {...el, isCompleted: !el.isCompleted } : el,
  );

  setTodo(changeValue);
  };
  if (todo.length === 0) {
    return <h1>No Data</h1>
  }

 
  return (
    <>
      <h1>list of todos</h1>
      <div style={{display: 'flex', gap: '1rem', justifyContent:'end'}}>
        <button onClick={handleSelect}>
          {todo[0].isCompleted === false ? 'select all' : 'deselect all'}
        </button>
        <button onClick={handleSelectedDelete}>delete all</button>
      </div>
      
      {/* {todo.map((el) => {
        return (
          <div
           key={el.id}
           style={{
            width: '80%', display:'flex', justifyContent:'space-between',
            alignItems: 'center',
            margin:'auto',
           }}
           >

           </div>
        )
      })} */}
      
      

      {todo.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              width: '80%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            <input type="checkbox" />

            {el.isEdit ? (
              <input
                name="edit_items"
                type="text"
                defaultValue={el.text}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <h1>{el.text}</h1>
            )}

            {el.isEdit ? (
              <>
                <button
                  onClick={() => handleCancel(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  cancel
                </button>
                <button
                  onClick={() => handleConfirm(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  confirm
                </button>
              </>
            ) : (
              <>
              {/* <button
               onClick={() => handleSelectAll(el.id)} 
               style={{height: 'fit-content' }} >
                selectall
              </button> */}
                <button
                  onClick={() => handleEdits(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  edit
                </button>
                <button
                  onClick={() => handleDelete(el.id)}
                  style={{ height: 'fit-content' }}
                >
                  delete
                </button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
//
// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';

// export const Todos = ({ props }) => {
//   const [editText, setEditText] = useState('');
//   const { todo, setTodo } = props;

//   const handleDelete = (id) => {
//     setTodo(todo.filter((el) => el.id !== id));
//   };

//   const handleEdits = (id) => {
//     setTodo(todo.map((el) =>
//       el.id === id ? { ...el, isEdit: true } : el
//     ));
//   };

//   const handleCancel = (id) => {
//     setTodo(todo.map((el) =>
//       el.id === id ? { ...el, isEdit: false } : el
//     ));
//   };

//   const handleConfirm = (id) => {
//     if (editText.trim() === '') return;
//     setTodo(todo.map((el) =>
//       el.id === id
//         ? { ...el, isEdit: false, text: editText }
//         : el
//     ));
//   };

//   // ✅ toggle single checkbox
//   const handleCheck = (id) => {
//     setTodo(todo.map((el) =>
//       el.id === id ? { ...el, checked: !el.checked } : el
//     ));
//   };

//   // ✅ select all
//   const handleSelectAll = (e) => {
//     setTodo(todo.map((el) => ({
//       ...el,
//       checked: e.target.checked,
//     })));
//   };

//   // ✅ delete selected
//   const handleDeleteSelected = () => {
//     setTodo(todo.filter((el) => !el.checked));
//   };

//   const isAllSelected =
//     todo.length > 0 && todo.every((el) => el.checked);

//   return (
//     <>
//       <h1>list of todos</h1>

//       {/* Select All & Delete */}
//       <div style={{ width: '80%', margin: 'auto', marginBottom: 15 }}>
//         <input
//           type="checkbox"
//           checked={isAllSelected}
//           onChange={handleSelectAll}
//         />
//         <span style={{ marginLeft: 8 }}>Select All</span>
//         <button style={{ marginLeft: 8 }}>Select All</button>

//         <button
//           onClick={handleDeleteSelected}
//           style={{ marginLeft: 20 }}
//         >
//           Delete Selected
//         </button>
//       </div>

//       {todo.map((el) => (
//         <div
//           key={el.id}
//           style={{
//             width: '80%',
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             margin: 'auto',
//           }}
//         >
//           <input
//             type="checkbox"
//             checked={el.checked}
//             onChange={() => handleCheck(el.id)}
//           />

//           {el.isEdit ? (
//             <input
//               type="text"
//               defaultValue={el.text}
//               onChange={(e) => setEditText(e.target.value)}
//             />
//           ) : (
//             <h1>{el.text}</h1>
//           )}

//           {el.isEdit ? (
//             <>
//               <button onClick={() => handleCancel(el.id)}>cancel</button>
//               <button onClick={() => handleConfirm(el.id)}>confirm</button>
//             </>
//           ) : (
//             <>
//               <button onClick={() => handleEdits(el.id)}>edit</button>
//               <button onClick={() => handleDelete(el.id)}>delete</button>
//             </>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };