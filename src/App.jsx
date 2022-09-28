import './assets/App.css'
import React, { useState } from 'react'
import InputGroup from './components/inputGroup'
import Todolist from './components/todoList'

function App() {

    const [todo, setTodo] = useState("")

    return (
    <div className="background">
        <div className="card-container">
            <div className="card-body">
                <h1 className="card-title">Todo App</h1>
                <p className="card-description">
                A simple todo app. You can start by adding a todo to the list.
                </p>
               <InputGroup todo={todo} setTodo={setTodo} />
               <Todolist />
            </div>
        </div>
    </div>
    )
}

export default App
