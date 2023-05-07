import './App.css';
import React, {useEffect, useState} from 'react';
import Todo from './components/Todo';
import AppBar from './components/AppBar';

const App = () => {

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => setTodos(data))
    .catch((err) => {
      console.log(err);
    })
  }
  console.log(todos)
  return ( 
    <div>
      <AppBar/>
      <div>{
           todos.map((todo)=>(
           <Todo id={todo.id} key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
          ))
        }
      </div>
    </div>
  );
}


export default App;
