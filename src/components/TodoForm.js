import { useState } from 'react'
import { useTodosContext } from '../hooks/useTodosContext'

export default function TodoForm() {
    const { dispatch } = useTodosContext()
    const [title, setTitle] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const todo = { title, dueDate, description }

        const response = await fetch('http://localhost:3001/todos', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setTitle('')
            setDueDate('')
            setDescription('')
            setError(null)
            console.log('new todo added:', json)
            dispatch({type: 'CREATE_TODO', payload: json})
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <h2>ADD TODO</h2>

            <label>Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Due Date:</label>
            <input
                type="Date"
                onChange={(e) => setDueDate(e.target.value)}
                value={dueDate}
            />

            <label>Description:</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <button>Submit</button>

            {error && <div>{error}</div>}
        </form>
    )
}
