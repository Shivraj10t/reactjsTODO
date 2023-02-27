 
import './App.css';
import { Form } from './components/form';
import { TodoList } from './components/todolist';
import { useState ,useEffect} from 'react';
import reportWebVitals from './reportWebVitals'
function App() {
  const [inputText,setInputText]=useState("")
  const [todo,setTodo]=useState([])
  const [filterTodos,setfilterTodos]=useState([])
  const [ststus,setStstus]=useState("All")
  useEffect(()=>{
    filterHandler();
  },[todo,ststus])
  const filterHandler=()=>{
    switch (ststus) {
      case "Completed":
        setfilterTodos(todo.filter(el=>el.Completed===true))
        break;
        case "Uncompleted":
          setfilterTodos(todo.filter(el=>el.Completed===false))
          break;
      default:
        setfilterTodos(todo)

        break;
    }
  }
  return (
    <div className="App">
   <header><h1>TODO LIST PROJECT </h1></header>
    <Form inputText={inputText} todo={todo} setStstus={setStstus} setInputText={setInputText} setTodo={setTodo}/>
    <TodoList todos={filterTodos} setTodo={setTodo}/>
    </div>
  );
}

reportWebVitals()
export default App;
