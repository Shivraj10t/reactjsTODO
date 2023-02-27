import React from "react";


export const Form=({inputText,setInputText,todo,setTodo,setStstus})=>{
    const inputTextHandler=(e)=>{       
        setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        const input_task=document.getElementById('input_task')
        if (inputText!=="") {
          input_task.style.display='none';
          setTodo([...todo,{id:Math.random()*2+1,text:inputText,Completed:false}])
          setInputText("")          
        } else {
          input_task.style.display='block';
           
        }
     
    }
    const filterHandler=(e)=>{     
      setStstus(e.target.value)    }
    return(

        <form className="">
          <input  value={inputText} onChange={inputTextHandler} placeholder="ADD TASK...." type="text"/> 
        
          <button onClick={submitTodoHandler} type="submit">Add</button> 
          <select onChange={filterHandler}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
          </select>
          <br></br>
          <center><label id="input_task">enter some task</label>
            </center> 
        </form>
    )
}