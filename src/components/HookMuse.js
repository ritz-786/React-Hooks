import React ,{useState , useEffect} from 'react'

function HookMuse() {

    const [position, setPosition] = useState({x: 0 ,y: 0})

    const changePosition = (e) => {
        console.log('Mouse moved')
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    // to use this function only once pass 
    //the parameters array as empty
    //specifying that useEffect do not change on
    // basis of any component

    useEffect(() => {
        console.log('use effect called');
        window.addEventListener('mousemove',changePosition)

        //After removing componenet listener is still attached
        // in ordder to remove the listener we have to use cleanup
        // this is nearly a replacement of componentWillUnmount of class
        return () => {
            console.log('removed')
            window.removeEventListener('mousemove',changePosition)
        }
    },[])

    return (
        <div>
            x - {position.x} <br></br>
                y - {position.y}
            
        </div>
    )
}

export default HookMuse
