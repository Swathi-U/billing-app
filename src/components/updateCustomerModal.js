import React from 'react'
import {connect} from 'react-redux'
import {startGetCustomerUpdate} from '../actions/updateCustomerModalAction'
import { startGetCustomers } from '../actions/customerListTableAction'
class UpdateCustomerModal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name : '',
            mobile : '',
            email : ''
        }
    }
    handleSubmit=()=>{
        console.log(this.props.id)
        const formData = {
            name : this.state.name,
            mobile : this.state.mobile,
            email : this.state.email
        }
        this.props.dispatch(startGetCustomerUpdate(formData,this.props.id))
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Update Customer</h1>
                <h2>Name</h2>
                <input type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                />
                <h2>Mobile Number</h2>
                <input type='phonenumber'
                        name='mobile'
                        value={this.state.mobile}
                        onChange={this.handleChange}
                />
                <h2>Email</h2>
                <input type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Update Customer</button>
            </div>
        )
    }
}
export default connect()(UpdateCustomerModal)