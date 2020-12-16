import React from 'react'
	
	
function TodoItemComplete(props){
    // style to add if todo is completed
    const completedStyle = {
        fontStyle: 'italic',
        color: '#999999',
        textDecoration: 'line-through',
    }
   
    return(
        <div className="todoItem">
            <input 
                id={props.item.id}
                name="todo"
                type="checkbox"
                checked={props.item.completed}
                onChange={() => {props.handleCheckbox(props.item.id)}} 
                className="todoComplete"
            />
            <label className="todoLabel" style={props.item.completed ? completedStyle : null}>{props.item.value}</label>
        </div>
    )
}
export default TodoItemComplete;
