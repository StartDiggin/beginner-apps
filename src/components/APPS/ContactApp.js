import React from 'react'
import Contacts from './Data/contacts'
import ContactForm from './subComponents/contactForm'
import ContactUpdateForm from './subComponents/contactFormUpdate'





class Contact extends React.Component{
    state={
        edit: false,
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

    handleLetter = (e) => {
        let letter = e.target.value.toLowerCase()
        let phoneArr = this.state.contacts.filter(contact => letter === contact.lastName.slice(0,1).toLowerCase() )
        this.setState({
            phoneBook: phoneArr
        })
        this.removeContactView()
    }
    
    handleView = (id) => {
        let element = document.querySelector(".contactView")
        element.classList.add("activeView")
        const person = this.state.phoneBook.find(contact => contact.id === id)
        this.setState({
            singleContact:person
        })
        this.setState({
            phoneBook: []
        })
    }

    handleEdit = () => {
        const {id, firstName, lastName, phoneNum, email} = this.state.singleContact
        this.setState({
            edit:true,
            id:id,
            firstName: firstName,
            lastName: lastName,
            phoneNum: phoneNum,
            email: email
        })
        let element = document.querySelector(".contactForm")
        element.classList.add("editContact")
    }
   
    handleUpdate = (e) => {
        e.preventDefault()
        const id = this.state.singleContact.id
       this.setState(() => {
           const contact = this.state.contacts.find(contact => contact.id === id)
           contact.firstName = e.target.firstName.value
           contact.lastName = e.target.lastName.value
           contact.phoneNum = e.target.phoneNum.value
           contact.email = e.target.email.value        
           return {contact}
       })
       // adds background color to the form when editing
       let element = document.querySelector(".contactForm")
        element.classList.remove("editContact")
       this.resetState()
    }

    handleDelete = () => {
        const id = this.state.singleContact.id 
        let contacts = this.state.contacts.filter(contact => contact.id !== id)
        this.setState({
            contacts:contacts
        })
        this.removeContactView()
    }

    resetState = () => {
        this.setState({
            edit:false,
            firstName: "",
            lastName: "",
            phoneNum: "",
            email: ""
        })
    }

    removeContactView = () => {
        let element = document.querySelector(".contactView")
        element.classList.remove("activeView")
    }

    render(){
        const letters = ["-","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-"]
        let { firstName, lastName, phoneNum, email }   = this.state
        return(
            <div className="section">
                <div className="contact">
                    <h1 className="pageHeading h1">Contact</h1>
                    <div className="contactForm">
                        {this.state.edit ? 
                        <ContactUpdateForm firstName={firstName} lastName={lastName} phoneNum={phoneNum} email={email} handleChange={this.handleChange} handleUpdate={this.handleUpdate} /> : 
                        <ContactForm firstName={firstName} lastName={lastName} phoneNum={phoneNum} email={email} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} 
                    </div>
                    <div className="contactDisplay">
                        {letters.map(letter => {
                            return <button key={letter} value={letter} onClick={this.handleLetter}>{letter}</button>
                        })}
                        {this.state.phoneBook.map(contact => <p key={contact.id}>
                            <span>{contact.firstName} {contact.lastName}  </span>
                            <button onClick={() => this.handleView(contact.id)}>view</button>
                        </p>)}
                    </div>
                    <div className="contactView" >
                           
                            <span>{this.state.singleContact.firstName} {this.state.singleContact.lastName}</span><br />
                            <span>{this.state.singleContact.phoneNum} </span><br />
                            <span>{this.state.singleContact.email}</span><br />
                            <button className="contactViewClose" onClick={this.removeContactView}>x</button>
                            <button className="contactViewBtn" onClick={this.handleEdit}>Edit</button>
                            <button className="contactViewBtn" onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact