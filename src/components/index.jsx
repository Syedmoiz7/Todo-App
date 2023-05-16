import "./index.css";
import { useState } from "react";

function Todo() {
    const [value, setValue] = useState()
    const [displayTodo, setDisplayTodo] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

        if (value !== '' && displayTodo !== '') {
            setDisplayTodo([...displayTodo, value])
            setValue('')
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <input type="text" id="" placeholder="Add your new todo"
                        onChange={(e => (setValue(e.target.value)))} value={value} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>

            <div>
                <ol>
                    {displayTodo.map((todos) => (
                        <li>{todos}</li >
                    ))}
                </ol>
            </div>
        </div>
    )

}

export default Todo;

