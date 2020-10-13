import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetRegister} from '../actions/registerAction'
class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            username : "",
            email : "",
            password : "",
            bussinessName : "",
            address : ""
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
       const formData={
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
            businessName : this.state.bussinessName,
            address : this.state.address,
        }
           console.log(this.state.username)
        this.props.dispatch(startGetRegister(formData))
        this.props.history.push('/users/login')
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <h2>Username</h2>
                <input type='text'
                        name='username' 
                        value={this.state.username} 
                        onChange={this.handleChange}
                />
                <h2>Email</h2>
                <input type='email' 
                        name='email'
                        value={this.state.email} 
                        onChange={this.handleChange}
                />
                <h2>password</h2>
                <input type='password'
                        name='password' 
                        value={this.state.password} 
                        onChange={this.handleChange}
                />
                <h2>BussinesssName</h2>
                <input type='text' 
                        name='bussinessName'
                        value={this.state.bussinessName} 
                        onChange={this.handleChange}
                />
                <h2>address</h2>
                <input type='text' 
                        name='address'
                        value={this.state.address} 
                        onChange={this.handleChange}
                />
                <input type='submit' value='Register'/>
                </form>
                
            </div>
        )
    }
}
export default connect()(withRouter(Register))