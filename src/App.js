import React from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App(){
    return(
        <div className="App">
            <h1>To Do List Using React Redux</h1>
            <Input/>
            <Output/>
        </div>
    )
}

export default App;