import React ,{useState , useEffect} from 'react'

function HookEffect() {

    const [count , setCount] = useState(0)
    const [name ,setName] = useState('')

    // To change according to a  particular state variable 
    //pass that state variable a s second parameter in the 
    //second parameter of useEffect
    useEffect(()=>{
        console.log('Changed')
        document.title = `You Clicked ${count} times`
    },[count])

    const changeName = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
            <input type='text' onChange={changeName} value={name}></input>
        </div>
    )
}

export default HookEffect
