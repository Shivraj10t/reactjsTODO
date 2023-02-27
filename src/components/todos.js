import React from "react";

const Todos=({todos,setTodo,id,text,completed,todo})=>{
const editHandle=()=>{
  
    setTodo(todos.map((item)=>{
if(item.id===todo.id){
return{
    ...item,Completed:!item.Completed
      }
   }
   return item;
}
))
    
 
}
const deleteHandlere=()=>{
    setTodo(todos.filter(el=>el.id!==todo.id))
  }
     
    return(
<>
<div className="todo">
    <li className="todo-item" key={id}> {completed!==true? text:<s>{text}</s>} </li>
    <div>
    <button className="edit-btn"  onClick={editHandle}  value={id}> <i className="fa  fa-edit"> </i></button>
    <button className="delete-btn" onClick={deleteHandlere} value={id}><i className="fa  fa-trash"></i></button></div>
</div>
</>
    )
}
export default Todos;