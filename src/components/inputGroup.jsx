import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../redux/action/todo.action"

export default function InputGroup({ todo, setTodo }) {
    
    const [idCounter, setIdCounter] = useState(0)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (todo !== "") {
            dispatch(addTodo(idCounter, todo))
            setIdCounter(idCounter + 1)
            setTodo("")
        } 
        else {
            console.log("error: input empty")
        }
       
    }   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input 
                        type="text" 
                        className="input"
                        value={todo}
                        onChange={handleChange}
                        placeholder="Enter name of todo.." 
                    />
                    <button type="submit" className="flex -mr-px">
                        <span className="button">Add</span>
                    </button>	
                </div>	
            </form>
        </>
    )
}
