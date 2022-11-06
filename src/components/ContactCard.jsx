import React from "react";
const ContactCard = (props) => {
const {id,name,email} = props.contact
    return (
        <div className = "container bg-gray p-3 rounded m-2">
            <div className = "content">
                <img className = "ui avatar image"  alt = "user" />
                <div className ="header">{name}</div>
                <div>{email}</div>
                <i className = "far fa-trash-alt" style = {{color:"red",marginTop:"7px"}} onClick = {()=>props.clickHandler(id)}></i>
            </div>
        </div>
    )
}

export default ContactCard