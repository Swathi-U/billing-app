import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {startGetLogin} from '../actions/loginAction'
class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email : "",
            password : ""
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            email : this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startGetLogin(formData))
        this.props.history.push('/home')
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login PAGE</h1>
                    <h2>Email</h2>
                    <input type='text' 
                            name='email'
                           value={this.state.email}
                           onChange={this.handleChange}
                    />
                    <input type='text'
                            name='password'
                            onChange={this.handleChange}
                    />
                    <input type='submit'
                            value='Login'
                    />
                </form>
            </div>
        )
    }
}
export default connect()(withRouter(Login))