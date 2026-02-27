import * as types from '../Reducer/Action'


export const Reducer = (oldState, action)=>{
    console.log('oldState', oldState);
    
    console.log('action',action.type);
    console.log('action.payload',action.payload);
    

    switch(action.type){
        case types.ADD_TODO_ITEMS:
            return[
                ...oldState,
                {
                    id: oldState.length+1,
                    text: action.payload,
                    isEdits:false,
                    isCompleted: false,
                },
            ];
            case types.DELETE_TODO_ITEMS:
            return oldState.filter((items) => items.id !== action.payload);

            case types.EDITS_TODO_ITEMS:
            return oldState.map((items) =>
            items.id === action.payload ? {...items, isEdits: true } : items,
        )

            default:
                return oldState;
    }
};