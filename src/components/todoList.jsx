import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from "../redux/action/todo.action"

export default function Todolist() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    return (
        <div className="flex justify-center">
            <ul className="bg-white rounded-lg drop-shadow w-full text-gray-900">
                {
                    todos?.map((todo) => (
                        <li className="flex place-content-between px-6 py-2 border-b border-gray-200 w-full rounded-t-lg" key={todo.id}>
                            <p className="place-self-center">{todo.task}</p>
                            <button className="remove-btn" onClick={() => dispatch(deleteTodo(todo.id))}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}