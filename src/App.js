 
import './App.css';
import { Form } from './components/form';
import { TodoList } from './components/todolist';
import { useState } from 'react';
import reportWebVitals from './reportWebVitals'
function App() {
  const [inputText,setInputText]=useState("")
  const [todo,setTodo]=useState([])
 
  return (
    <div className="App">
   <header><h1>TODO LIST PROJECT </h1></header>
    <Form inputText={inputText} todo={todo} setInputText={setInputText} setTodo={setTodo}/>
    <TodoList todo={todo}/>
    </div>
  );
}

reportWebVitals()
export default App;
