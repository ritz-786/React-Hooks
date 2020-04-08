import React,{useReducer} from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentD from './ComponentD'

export const CounterContext = React.createContext()

const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment':
            return state + 1;
        
        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;

        default:
            return state;
    }
}

function ContextCounter() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <CounterContext.Provider value = {{count: count , counterDispatch: dispatch}}>
                <p>Count - {count}</p>
                <ComponentA />
                <ComponentB />
                <ComponentD />
            </CounterContext.Provider>
        </div>
    )
}

export default ContextCounter
