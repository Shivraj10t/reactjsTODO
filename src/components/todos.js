import React from "react";

const Todos=({Completed,text,id})=>{

    const edit=document.querySelectorAll('.edit-btn');
    for(let x of edit){
        x.addEventListener('click',function(e){
console.log(e)
    })}
    return(
<>
<div className="todo">
    <li className="todo-item" key={id}>{text} </li>
    <div>
    <button className="edit-btn"    value={id}> <i className="fa  fa-edit">   &nbsp; </i>EDIT</button>
    <button className="delete-btn" value={id}><i className="fa  fa-trash"> &nbsp;</i>DELETE</button></div>
</div>
</>
    )
}
export default Todos;