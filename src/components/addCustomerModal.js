import React from 'react'
import {startGetCreateCustomer} from '../actions/customerAction'
import {startGetCustomers} from '../actions/customerListTableAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class AddCustomerModal extends React.Component{
    constructor(){
        super()
        this.state = {
            name : '',
            mobile : '',
            email : ''
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = ()=>{
        const formData = {
            name : this.state.name,
            mobile : this.state.mobile,
            email : this.state.email
        }
        this.props.dispatch(startGetCreateCustomer(formData))
        this.props.dispatch(startGetCustomers())
    }
    render(){
        return(
            <div>
                    <h1>Add Customer</h1>
                    <h2>Name</h2>
                    <input  type='text' 
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                     />  
                     <h2>Mobile Number</h2>
                    <input  type='number' 
                            name='mobile'
                            value={this.state.mobile}
                            onChange={this.handleChange}
                     />  
                     <h2>Email</h2>
                    <input  type='email' 
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                     />       
                     <button onClick={this.handleSubmit}>Add Customer</button>
            </div>
        )
    }
}
export default connect()(AddCustomerModal)