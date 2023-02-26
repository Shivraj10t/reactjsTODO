import React from "react";
import Todos from "./todos";

export const TodoList=({todo})=>{

    return( 
    <div className="todolist-container">
    <ul className="todo-list">
 {todo.map((todo)=><Todos key={todo.id} id={todo.id} text={todo.text} Completed={todo.Completed}/>)}
    </ul>
    </div> 
       )
}