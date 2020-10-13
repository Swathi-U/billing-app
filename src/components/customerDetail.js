import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {startGetCustomer} from '../actions/customerAction'
class CustomerDetailModal extends React.Component{
    constructor(){
        super()

    }
    componentDidMount(){
        console.log(this.props)
        this.props.dispatch(startGetCustomer(this.props.match.params.id))
    }
    handleSubmit=()=>{
        this.props.history.push('/customers')
    }
    render(){
        return(
            <div>
                <h1>Customer Details</h1>
                <h2>Id : {this.props.customerDetail._id}</h2>
                <h2>Name : {this.props.customerDetail.name}</h2>
                <h2>Mobile Number: {this.props.customerDetail.mobile}</h2>
                <h2>Email Id: {this.props.customerDetail.email}</h2>
                <h2>CreatedAt : {this.props.customerDetail.createdAt}</h2>
                <h2>UpdatedAt : {this.props.customerDetail.updatedAt}</h2>
                <button onClick={this.handleSubmit}>Back</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        customerDetail : state.customers
    }
}
export default withRouter(connect(mapStateToProps)(CustomerDetailModal))