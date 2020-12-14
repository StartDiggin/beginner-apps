import React from 'react'
	
function updateForm(props){
    return (
        <div>
           <form onSubmit={props.onSubmit}>
                <input 
                    type="text" 
                    name = "todo"
                    value = {props.todo}
                    placeholder = "Todo"  
                    onChange = {props.onChange}  
                />
                <button>Update</button>
            </form>
        </div>
    )
}

export default updateForm  
