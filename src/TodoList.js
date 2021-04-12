import React from "react"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import Todo from './Todo'
function TodoList({todos,removeTodo,toggleTodo}){
    return(
        <Paper>
            <List>
            {todos.map(todo=>(
                <>
                    <Todo 
                        toggleTodo={toggleTodo}
                        id={todo.id}
                        removeTodo={removeTodo}
                        task={todo.task} 
                        key={todo.id} 
                        completed={todo.completed}
                    />
                    <Divider/>
                </>
            ))}
            </List>
        </Paper>
    )
}
export default TodoList