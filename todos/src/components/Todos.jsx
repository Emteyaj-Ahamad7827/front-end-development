import { useState } from 'react';

export const Todos = ({ props }) => {
  const [editText, setEditText] = useState('');
  const [pinItems,setPinItems]=useState([])

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
    // console.log('todo.iscompleted:' todo[0].isCompleted);
    setTodo(selectedAll);
  };

  const handleSelectedDelete = () => {
    const deleteSelectItems = todo.filter((el) => el.isCompleted !== trim);
    setTodo(deleteSelectItems);
    };
    const changeInput = (id) => {
    const changeValue = todo.map((el) =>
    el.id === id ? {...el, isCompleted: !el.isCompleted } : el,
  );

  setTodo(changeValue);
  };

  const handlePinItems = (id)=> {
    const pin_value = todo.filter((el) => el.id === id);

    setPinItems((prev) => [...prev, ...pin_value]);

    const unPin_value = todo.filter((el) => el.id !== id);
    setTodo(unPin_value);
  };
  if (todo.length === 0 && pinItems.length === 0) {
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
      
      <h1>Pin Items</h1>
      
      {pinItems.map((el, i) => {
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
      // unPIn
      <h1>unPin Items</h1>
      {todo.map((el, i) => {
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
            <input type="checkbox" 
            onChange={() => {
              changeInput(el.id);
            }}
            checked={el.isCompleted}
            />

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
            <button onClick={() => handlePinItems(el.id)}>pin</button>
          </div>
        );
      })}
    </>
  );
};
