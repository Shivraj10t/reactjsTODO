import React from "react";
import Todos from "./todos";

export const TodoList=({todos,setTodo})=>{

    return( 
    <div className="todolist-container">
    <ul className="todo-list">
 {todos.map((todo)=><Todos todos={todos} 
 todo={todo}
 setTodo={setTodo} 
 key={todo.id}  
 text={todo.text} 
 completed={todo.Completed}
 />)}
    </ul>
    </div> 
       )
}