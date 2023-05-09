import React, {useEffect, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import AddTodo from './AddTodo';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TodoApp = () => {

    const Todo = ({id,title,completed}) => {

        const handleDelete = () => {
            onDelete(id);
        }
        return(
            <Box
                sx={{
                    width: '100%',
                    height: 50,
                }}
                >
                <Grid alignItems="center" sx={{marginBottom: '10px'}} container spacing={2}>
                    <Grid xs={4}>
                        <Checkbox {...label} />
                    </Grid>
                    <Grid xs={4}>
                        <span>{title}</span>
                    </Grid>
                    <Grid xs={4}>
                    <button onClick={handleDelete}>delete</button>
                    </Grid>
                </Grid>
                        
            </Box>
        )
    } 

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

    const onAdd = async (title) => {
        await fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          body: JSON.stringify({
            title: title,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setTodos((todos) => [...todos, data]);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const onDelete = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (res.status !== 200) {
              return;
            } else {
              setTodos(
                todos.filter((todo) => {
                  return todo.id !== id;
                })
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

    console.log(todos)
    return (
        <div>
            <h1>ToDO!</h1>
            <AddTodo onAdd={onAdd}/>
            <div>
                {
                todos.map((todo)=>(
                <Todo id={todo.id} key={todo.id} title={todo.title} completed={todo.completed} onDelete={onDelete}/>
                ))
            }
            </div>
        </div>
    );
}
  
  
  export default TodoApp;