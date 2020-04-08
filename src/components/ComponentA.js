import React,{useContext} from 'react'
import {CounterContext} from './ContextCounter'

function ComponentA() {

    const counterContext = useContext(CounterContext)

    return (
        <div>
            <button onClick={() => counterContext.counterDispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.counterDispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.counterDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA