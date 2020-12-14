import React from 'react'


const ContactUpdateForm = (props) => {

    return(
        <form onSubmit={props.handleUpdate}>
            <label>First name: </label>
            <input type="text" name="firstName" value={props.firstName} placeholder="enter first name" onChange={props.handleChange} /><br />

            <label>Last name: </label>
            <input type="text" name="lastName" value={props.lastName} placeholder="enter last name" onChange={props.handleChange} /><br />

            <label>Phone number: </label>                        
            <input type="text" name="phoneNum" value={props.phoneNum} placeholder="enter phone number" onChange={props.handleChange} /><br />

            <label>Email: </label>
            <input type="email" name="email" value={props.email} placeholder="enter email" onChange={props.handleChange} /><br />
            
            <button className="contactBtn">Update</button>
        </form> 
    )

}

export default ContactUpdateForm;


























