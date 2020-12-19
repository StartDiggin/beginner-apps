import React from 'react'
import TodoItem from "./subComponents/todoItems"
import TodoItemComplete from "./subComponents/todoItemComplete"
import AddTodo from "./subComponents/addTodo"
import UpdateTodo from "./subComponents/updateTodo"

 
class TodoApp extends React.Component {
    constructor(){
        super()
        this.state={
            edit: false,
            id: 0,
            todo: "",
            todoData: []
        }
    }



    handleChange = (e) => {
        // Input values
        const { name, value } = e.target
        // updates state when checkbox is checked or unchecked.
        this.setState({
            [ name ]: value
        })
    }

    handleCheckbox = (id) => {
        // handles checkboxes
        const updateTodo = this.state.todoData.map(todo => {
            // check if todo.id matches, return if true
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })
        this.setState({
            todoData: updateTodo
        })
    }
    
    // methods for the form
    handleSubmit = (e) => {
        e.preventDefault()
        this.addTodo(e)
        this.resetState()
    }

    addTodo = (e) => {
        let id = Date.now()
        const {name, value} = e.target.todo
        if(value.length !== 0){
            let todoObj = { id:id, name:name, value:value, completed: false}
            let todoArray = this.state.todoData
            todoArray.push(todoObj)
            this.setState({
                todoData:todoArray
            })
        } else {
            alert("Please Enter a Todo")
        }
    }

    handleDelete = (id) => {
        const newList = this.state.todoData.filter(item => item.id !== id)
        this.setState({
            todoData: newList
        })
    }

    handleEdit = (id) => {
        const todo = this.state.todoData.find(todo => todo.id === id)
        this.setState({
            edit:true,
            id:id,
            todo: todo.value
        })
    }

    handleUpdate = (e) => {
        e.preventDefault()
        let id = this.state.id
        console.log(e.target.todo.value.length)
        if(e.target.todo.value.length !== 0){
            this.setState(() => {
                const todo = this.state.todoData.find(todo => todo.id === id)
                todo.value = e.target.todo.value
                return { todo }
            })
            this.resetState()
        } else {
            alert("Please Enter Updated Todo!")
        }
    }

    resetState = () => {
        this.setState({
            edit:false,
            id:0,
            todo:''
        })
    }
    
  
    render(){
        const todoList = this.state.todoData.map(item => item.completed ? null : <TodoItem key={item.id} item={item} handleCheckbox={this.handleCheckbox} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>)
        const todoDoneList = this.state.todoData.map(item => item.completed ? <TodoItemComplete key={item.id} item={item} handleCheckbox={this.handleCheckbox} handleEdit={this.handleEdit} onChange={this.onInputChange}/> : null)
        
        return(
            <div className="section">
                <h1 className="pageHeading">Stuff Todo!!!</h1>
                {/* Toggle betweet add and update todo  */}
                <div>
                    {this.state.edit ?  <UpdateTodo onSubmit={this.handleUpdate} onChange={this.handleChange} todo={this.state.todo} /> : <AddTodo onSubmit={this.handleSubmit} onChange={this.handleChange} todo={this.state.todo} /> }
                </div>
                <div className="main__list">
                    <h2>Items Todo:</h2>
                    <ul className="main__list--items">
                        {todoList}
                    </ul>
                </div>
                <div>
                    <h2>Finished Items:</h2>
                    <ul className="main__list--items">{todoDoneList}</ul>
                </div>
            </div> 
        )
    } 
}
export default TodoApp;


