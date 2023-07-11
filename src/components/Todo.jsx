import { useState } from "react";
export default function Todo() {
    //Create state and setter for text field
    const [todo, setTodo] = useState("");

    //Event handler for text field update
    const handleChange = (event) => {
        setTodo(event.target.value);
    };
    return (
    <div>
        <form>
            <input value={todo} type="text" onChange={handleChange}></input>
            <button type="submit">Add</button>
        </form>   
    </div>
    );
}