import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

const reducer = (state,action) => {
    console.log(action)
    switch (action.type) {
        case 'increment':
            return {...state,firstCounter : state.firstCounter + action.value};
    
        case 'decrement':
            return {...state,firstCounter : state.firstCounter - action.value};

        case 'increment5':
            return {...state,secondCounter : state.secondCounter + action.value};
    
        case 'decrement3':
            return {...state,secondCounter : state.secondCounter - action.value};

        case 'reset':
            return initialState;

        default:
            break;
    }
}

function ReducerCounter2() {

    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <p>Count - {count.firstCounter} , SecondCount - {count.secondCounter}</p>
            <div>
                <button onClick={() => dispatch({type : 'increment',value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement',value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
            <div>
                <button onClick={() => dispatch({type : 'increment5',value: 5})}>Increment5</button>
                <button onClick={() => dispatch({type: 'decrement3',value: 3})}>Decrement3</button>
            </div>
        </div>
    )
}

export default ReducerCounter2
