import { useEffect } from 'react'
import { useTodosContext } from "../hooks/useTodosContext"

// components
import TodoDetails from '../components/TodoDetails'
import TodoForm from '../components/TodoForm'

export default function Home() {
    const { todos, dispatch} = useTodosContext()

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch('https://cute-todo-api.onrender.com/todos')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_TODOS', payload: json})
            }
        }
        fetchTodos()
    }, [dispatch])


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