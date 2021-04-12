import React from "react"
import Paper from '@material-ui/core/Paper'
import { TextField } from "@material-ui/core"
import useInputState from "./hooks/useinputState"

function TodoForm ({addTodo}){
    const [value,handleChange,reset] = useInputState("")
    return(
        <Paper 
            style={{margin:"1rem 0",padding:"0 1rem"}}
        >
            <form 
                onSubmit={e =>{
                e.preventDefault()
                addTodo(value);
                reset()
            }}>
                <TextField 
                    value={value}
                    margin='normal'
                    label="Add New Todo"
                    onChange={handleChange}
                    fullWidth
                />
            </form>
        </Paper>
    )
}
export default TodoForm;
//use input hook (hook is reuseble,that is,every input can call the input hook with giving defferent hook name)