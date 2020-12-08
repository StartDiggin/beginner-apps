import React from 'react'




class Contact extends React.Component{
    state={
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        contacts: []
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        let personArr = this.state.contacts;
        let {firstName, lastName, phoneNum, email} = this.state
        let person = {firstName:firstName, lastName:lastName, phoneNum:phoneNum, email:email}
        personArr.push(person)
        this.resetState()
    }

    resetState = () => {
        this.setState({
            firstName: "",
            lastName: "",
            phoneNum: "",
            email: ""
        }
        )
    }

    render(){
        return(
            <div>
                <h1>Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>First name: </label>
                    <input type="text" name="firstName" value={this.state.firstName} placeholder="enter first name" onChange={this.handleChange}/>
                    <br />
                    <label>Last name: </label>
                    <input type="text" name="lastName" value={this.state.lastName} placeholder="enter last name" onChange={this.handleChange}/>
                    <br />
                    <label>Phone number: </label>
                    <input type="text" name="phoneNum" value={this.state.phoneNum} placeholder="enter phone number" onChange={this.handleChange}/>
                    <br />
                    <label>Email: </label>
                    <input type="email" name="email" value={this.state.email} placeholder="enter email" onChange={this.handleChange}/>
                    <br />
                    <button>Submit</button>
                </form>
                <div>
                    {this.state.firstName}
                </div>
            </div>
        )
    }
}

export default Contact