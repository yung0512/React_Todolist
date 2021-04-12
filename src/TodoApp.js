import React ,{useState}from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import uuid from 'uuid/dist/v4'
function TodoApp(){
    const initialTodos = [
        {id:1,task:"Clean Fishtank",completed:false},
        {id:2,task:"jogging 3000m",completed:true},
        {id:3,task:"feed cats",completed:false}
    ]
    const [todos, setTodos] = useState(initialTodos)
    const addTodo = newTodoText => {
        setTodos([...todos,{id:uuid(),task:newTodoText,completed:false}])
    }
    const removeTodo = todoId =>{
        const updatedTodos = todos.filter( todo=> todo.id !== todoId);
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => todo.id===todoId?{...todo,completed:!todo.completed}:todo)
        setTodos(updatedTodos)
    }
    return (
        <Paper
            style={{
                padding:0,
                margin:0,
                height:"100vh",
                backgroundColor:"#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{height:"64px"}}>
                <Toolbar>
                    <Typography color='inherit'>
                        TODOS WITH HOOKS
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop:"1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}
export default TodoApp;