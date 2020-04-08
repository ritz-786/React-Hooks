import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_DATA':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH__ERROR': 
            return{
                loading:false,
                error: action.payload,
                post: {}
            }
        default:
            return state;
    }
}
 
function HTTPReducer() {

    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/4')
            .then(response => {
                console.log(response.data)
                dispatch({type: 'FETCH_DATA',payload: response.data})
            })
            .catch((e) => {
                dispatch({type: 'FETCH__ERROR' , payload: `${e}`})
            })
    },[])

    return (
        <div>
            {console.log(state)}
            {state.error ? state.error : null}
            {state.loading ? 'Loading' : state.post.title}
        </div>
    )
}
export default HTTPReducer
