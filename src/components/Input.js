import React from "react";
import "./Input.css";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {Add_toDoList} from "../actions/toDoList";

function Input() {
    const [mytask, setMytask] = useState("");
    const dispatch = useDispatch();
    return (
        <div className="Input">
            <input
                type="text"
                placeholder="Enter Your Task"
                value={mytask}
                onChange={(event) => { setMytask(event.target.value) }}
            />
            <button onClick={()=>{dispatch(Add_toDoList(mytask))}}>
                Add Task
            </button>
        </div>
    )
}

export default Input;