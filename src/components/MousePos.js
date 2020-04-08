import React ,{useState} from 'react'
import HookMuse from './HookMuse'

function MousePos() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
             <div><button onClick = {() => setDisplay(!display)}>Toggle</button></div>
            {
                display && <HookMuse />
            }
        </div>
    )
}

export default MousePos
