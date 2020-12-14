import React from 'react'


const ContactForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <label>First Name: </label>
            <input type="text" name="firstName" value={props.firstName} placeholder="enter first name" onChange={props.handleChange} /><br />

            <label>Last Name: </label>
            <input type="text" name="lastName" value={props.lastName} placeholder="enter last name" onChange={props.handleChange} /><br />

            <label>Phone Number: </label>                        
            <input type="text" name="phoneNum" value={props.phoneNum} placeholder="enter phone number" onChange={props.handleChange} /><br />

            <label>Email: </label>
            <input type="email" name="email" value={props.email} placeholder="enter email" onChange={props.handleChange} /><br />

            <button className="contactBtn">Submit</button>
        </form> 
    )

}

export default ContactForm;


























