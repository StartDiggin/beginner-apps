import React from 'react'
import '../../../css/todo.css'
	
function TodoItem(props){
   
    const completedStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
 
    return(
        <div className="todoItem">
            <input 
                id={props.item.id}
                name="todo"
                type="checkbox"
                checked={props.item.completed}
                onChange={() => {props.handleCheckbox(props.item.id)}} 
            /><label style={props.item.completed ? completedStyle : null}>{props.item.value}<button className="btnTodo" onClick={() => props.handleEdit(props.item.id)} >Edit</button><button className="btnTodo" onClick={() => props.handleDelete(props.item.id)}>Delete</button> 
            
            </label>
        </div>
    )
}
export default TodoItem;
