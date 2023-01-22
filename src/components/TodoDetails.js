import { useTodosContext } from "../hooks/useTodosContext"

export default function TodoDetails({ todo }) {
    const { dispatch } = useTodosContext()

    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/todos/' + todo._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_TODO', payload: json })
        }
    }

    return (
        <div>
            <h6>{todo.title}</h6>
            <h5>{todo.dueDate}</h5>
            <h4>{todo.description}</h4>

            <span onClick={handleClick}>delete</span>
            <hr />
        </div>
    )
}