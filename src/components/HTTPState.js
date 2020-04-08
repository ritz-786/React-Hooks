import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HTTPState() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/4')
            .then(response => {
                setLoading(false)
                setError('')
                setPost(response.data)
            })
            .catch((e) => {
                setLoading(false)
                setError(`${e}`)
                setPost({})
            })
    },[])

    return (
        <div>
            {error ? error : null}
            {loading ? 'Loading' : post.title}
        </div>
    )
}

export default HTTPState
