import { useEffect, useState } from 'react'

// components
import TodoDetails from '../components/TodoDetails'
import TodoForm from '../components/TodoForm'

export default function Home() {
    const [todos, setTodos] = useState(null)

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('http://localhost:3001/todos')
            const json = await response.json()

            if (response.ok) {
                setTodos(json)
            }
        }
        fetchTodos()
    }, [])


    return (
        <div className='home'>
            <div className="todos">
                {todos && todos.map((todo) => (
                    <TodoDetails key={todo._id} todo={todo}/>
                ))}
            </div>
            <TodoForm/>
        </div>
    )
}