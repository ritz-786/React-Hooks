import React,{useState} from 'react'

function HookCounter() {
    let initialCount = 0
    // count is the state variable
    // stateCount is the function to chanhe the count variable
    const [count, setCount] = useState(initialCount)
    const [items, setItem] = useState([{id:0,title:'Apple'},])

    const incrementFive = () => {
        for(let i=0;i<5;i++){
            setCount((prevCount) => prevCount+1)
        }
    }

    function addItem(){
        setItem([...items,{
                id:items.length,
                title: `Mango ${items.length}`
            }])
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
            <button onClick={incrementFive}>Five</button>
            <button onClick={addItem}>Add Item</button>
            <ul>{
                items.map(item => <li key={item.id}>{item.title}</li>)
                }
            </ul>
        </div>
    )
}

export default HookCounter
