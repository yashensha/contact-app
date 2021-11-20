import React from "react";


class AddContact extends React.Component {
    state = {
        name : "",
        email : ""
    }
    add = (e) => {
        e.preventDefault()
        if (this.state.name === "" || this.state.email === ""){
        alert ('All the fields are mandatorey')
        return;
    }
    this.props.addContactHandler(this.state)
    this.setState({name:"", email:""})
    console.log(this.state)
    }
    render() {
    return (
        <div className = "container bg-light">
            <h2 className="text-center my-3">Add contact</h2>
            <form  onSubmit = {this.add}>
                <div className = "form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control my-2" type = "text" name = "name" placeholder = "Name" value = {this.state.name} onChange = { (e) => this.setState({name: e.target.value})}/>
                    <label htmlFor="E-mail">E-mail</label>
                    <input className="form-control my-2" type = "email" name = "E-mail" placeholder = "E-mail" value = {this.state.email} onChange = { (e) => this.setState({email: e.target.value})}/>
                    <small className="form-text text-muted">We don't share your details to anyone.</small>
                </div>
                <button className = "btn btn-primary my-3 px-4">Add</button>
            </form>
        </div>
    )
}

}

export default AddContact