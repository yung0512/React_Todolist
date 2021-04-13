import React from "react"
import useToggleState from "./hooks/useToggleState"
import EditTodoForm from "./EditTodoForm"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Checkbox from "@material-ui/core/Checkbox"
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from "@material-ui/core/IconButton"
import EditIcon from "@material-ui/icons/Edit"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"

function Todo({task,completed,removeTodo,id,toggleTodo,editTodo}){
    const [isEditing,toggle] = useToggleState(false);
    return(
        <ListItem style={{height:"64px"}}>
            {isEditing ? <EditTodoForm id={id} editTodo={editTodo} task={task} toggleEditForm={toggle}/>:
                <>
                <Checkbox checked={completed} tabIndex={-1} onClick={()=>toggleTodo(id)}/>
                <ListItemText style={{textDecoration:completed?"line-through":"none"}}>
                {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={()=>removeTodo(id)}>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={toggle}>
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
                </>
            }   
        </ListItem>
    );
            
}
export default Todo;