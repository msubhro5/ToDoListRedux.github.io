import toDoList from "./toDoList";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        toDoList
    }
)

export default rootReducer;