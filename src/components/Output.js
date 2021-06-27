import React from "react";
import "./Output.css";
import { useSelector, useDispatch } from "react-redux";
import {Delete_toDoList} from "../actions/toDoList";

function Output() {
    const myState = useSelector((state) => { return state.toDoList });
    const dispatch =useDispatch();
    return (
        <div className="Output">
            {myState.map((cval) => {
                return (
                    <div className="task_list" key={cval.id}>
                        <span>{cval.mytask}</span>
                        <button onClick={()=>{dispatch(Delete_toDoList(cval.id))}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Output;