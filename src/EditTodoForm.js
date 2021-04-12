import React from "react"
import TextField from "@material-ui/core/TextField"
import useInputState from "./hooks/useinputState"

function EditTodoForm ({editTodo,id,task,toggleEditForm}){
    const [value, handleChange, reset] = useInputState(task)
    return(
        <form onSubmit={e => {
            e.preventDefault();
            editTodo(id,value)
            reset();
            toggleEditForm();
        }}>
            <TextField 
                maring="normal"
                value={value} 
                onChange={handleChange} 
                fullWidth
            />
        </form>
    )
}
export default EditTodoForm