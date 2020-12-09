import React from 'react'




class Contact extends React.Component{
    state={
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        contacts: [],
        phoneBook: []
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

    handleLetter = (e) => {
        let letter = e.target.value.toLowerCase()
        // let sortLetter = lastName.slice(0,1).toLowerCase()
        // let phoneArr = this.state.phoneBook 
        let phoneArr = this.state.contacts.filter(contact => {
            let sortLet = contact.lastName.slice(0,1).toLowerCase()
            let phoneArr2 =[]
            let phoneArr3 = []
            if( sortLet === letter ){
                phoneArr2.push(contact)
                console.log(contact)
            } else {
                phoneArr3.push(contact)
            } return phoneArr2;
            
        })

        console.log(phoneArr)
    }

    render(){
        const letters = ["-","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
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
                    {letters.map(letter => {
                        return <button key={letter} value={letter} onClick={this.handleLetter}>{letter}</button>
                    })}
                    <p>
                        <span>Fred Flinstone</span><br />
                        <span>555-235-6589</span><br />
                        <span>fred@bedrock.com</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact