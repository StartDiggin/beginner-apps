import React from 'react'
import Contacts from './Data/contacts'





class Contact extends React.Component{
    state={
        id:"",
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        contacts: [],
        phoneBook: [],
        singleContact: []
    }

    componentDidMount = () => {
        this.setState({
            contacts:Contacts })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        let id = Date.now()
        let personArr = this.state.contacts;
        let {firstName, lastName, phoneNum, email} = this.state
        let person = {id:id, firstName:firstName, lastName:lastName, phoneNum:phoneNum, email:email}
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

    handleLetter = (e) => {
        let letter = e.target.value.toLowerCase()
        // let sortLetter = lastName.slice(0,1).toLowerCase()
        // let phoneArr = this.state.phoneBook 
        let phoneArr = this.state.contacts.filter(contact => letter === contact.lastName.slice(0,1).toLowerCase() )
        this.setState({
            phoneBook: phoneArr
        })
    }

    handleView = (id) => {
        let element = document.querySelector(".contactView")
        element.classList.add("activeView")
        const person = this.state.phoneBook.find(contact => contact.id === id)
        this.setState({
            singleContact:person
        })
        console.log(person)
    }

    handleClass = () => {
        let element = document.querySelector(".contactView")
        element.classList.remove("activeView")
    }

    render(){
        const letters = ["-","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        return(
            <div className="contact">
                <div className="contactForm">
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
                </div>
                <div className="contactDisplay">
                    {letters.map(letter => {
                        return <button key={letter} value={letter} onClick={this.handleLetter}>{letter}</button>
                    })}
                    {this.state.phoneBook.map(contact => <p key={contact.id}>
                        <span>{contact.firstName} {contact.lastName}  </span>
                        {/* <span>{contact.phoneNum} </span><br />
                        <span>{contact.email}</span> */}
                        <button onClick={() => this.handleView(contact.id)}>view</button>
                    </p>)}
                </div>
                <div className="contactView" onClick={this.handleClass}>
                        <h1>Contact</h1>
                        <span>{this.state.singleContact.firstName} {this.state.singleContact.lastName}</span><br />
                        <span>{this.state.singleContact.phoneNum} </span><br />
                        <span>{this.state.singleContact.email}</span><br />
                        <button className="contactViewClose">x</button>
                </div>
            </div>
        )
    }
}

export default Contact