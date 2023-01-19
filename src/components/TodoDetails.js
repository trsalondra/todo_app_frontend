export default function TodoDetails({ todo }) {

        
    return (
        <div>
            <h3>{todo.title}</h3>
            <h5>{todo.dueDate}</h5>
            <h4>{todo.description}</h4>
            <hr />
        </div>
    )
}