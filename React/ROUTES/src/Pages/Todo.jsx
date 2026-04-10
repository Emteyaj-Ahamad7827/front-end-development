import {TodoInput} from '../Components/TodoInput'
import {TodoList} from '../Components/TodoList'

export const Todo= ()=>{
    return (
        <>
        <div style={{
            margin: '1.5rem',
             display:'flex',
             flexDirection:'column',
             alignItems:'center',
             gap:'1rem',
             }}
             >
            <TodoInput />
            <TodoList />
        </div>
        </>
    )
}