import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from "../redux/action/todo.action"

export default function Todolist() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    return (
        <div className="list-container">
            <ul className="list-group">
                {
                    todos?.map((todo) => (
                        <li className="list-item" key={todo.id}>
                            <p className="place-self-center">{todo.task}</p>
                            <button className="remove-btn" onClick={() => dispatch(deleteTodo(todo.id))}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}