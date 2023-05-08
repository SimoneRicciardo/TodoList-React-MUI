import React, {useEffect, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Todo = ({id,title,completed}) => {
    return(
        <Box
            sx={{
                width: '100%',
                height: 50,
            }}
            >
            <Grid alignItems="center" sx={{marginBottom: '10px'}} container spacing={2}>
                <Grid xs={3}>
                    <Checkbox {...label} />
                </Grid>
                <Grid xs={3}>
                    <span>{id}</span>
                </Grid>
                <Grid xs={3}>
                    <span>{title}</span>
                </Grid>
                <Grid xs={3}>
                    <button>delete</button>
                </Grid>
            </Grid>
                    
        </Box>
    )
} 

//======DA COMPLETARE ADD TODO 

/* const AddTodo = ({onAdd}) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.title.value);
        e.target.title.value = ""
    }
}  */

const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
      fetchData();
    },[])
  
    const fetchData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/todos?&_limit=15')
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => {
        console.log(err);
      })
    }

    /* const onAdd = async (title) => {
        await fetch('https://jsonplaceholder.typicode.com/todos?&_limit=15',{
          method: 'POST',
          body: JSON.stringify({
              title: title
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8" 
          }
        })
        .then((res) => {
            if(res.status !== 201){
                return
            }else{
                return res.json();
            }
        })
        .then((data) => {
            setTodos((todos) => [...todos,data]);
        })
        .catch((err) => {
            console.log(err);
        })
    } */

    console.log(todos)
    return (
        <div>
            {
             todos.map((todo)=>(
             <Todo id={todo.id} key={todo.id} title={todo.title} completed={todo.completed}/>
            ))
          }
        </div>
    );
  }
  
  
  export default TodoApp;