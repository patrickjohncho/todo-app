import { useState } from "react";
export default function Todo() {
    //Create state and setter for text field
    const [todo, setTodo] = useState("");
    //Create array for "todo list
    const [todoList, setTodoList] = useState([]);

    //Event handler for text field update
    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    //Event handler for submission
    const handleSubmit = (event) => {
        event.preventDefault();
        //Create temp list
        let tempList = todoList;
        //Add current item
        tempList.push(todo);
        //Set the list to temp list
        setTodoList(tempList);

        //Clear text box
        setTodo("");
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={todo} type="text" onChange={handleChange}></input>
            <button type="submit">Add</button>
        </form>   
    </div>
    );
}