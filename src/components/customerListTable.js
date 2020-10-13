import React from 'react'
import {startGetCustomers} from '../actions/customerListTableAction'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UpdateCustomerModal from './updateCustomerModal'
import CustomerDetailModal from './customerDetail'
import {startGetDeleteCustomer} from '../actions/customerAction'
class CustomerListTable extends React.Component{
    constructor(){
        super()
        this.state = {
            isModalOpen : false,
            isCustomerModalOpen : false,
            id : 0,
            customerDetail : {}
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetCustomers())
    }
    handleModalClose = ()=>{
        this.setState({isModalOpen:false})
        this.props.dispatch(startGetCustomers())
    }
    handleUpdate=(id)=>{
        this.setState((prevState)=>{
            return{
                isModalOpen : !prevState.isModalOpen,
                id : id
            }
        })
        
    }
    handleDelete= (id)=>{
        this.props.dispatch(startGetDeleteCustomer(id))
        
    }
    handleCustomerDetails=(customerId)=>{
       this.props.history.push(`/customer/${customerId}`)
       
    }
    render(){
        return(
            <div>
                <table border='1'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Mobile number</th>
                        <th>Email Id</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {console.log(this.props.customersList)}
                        {this.props.customersList.map((customer)=>{
                            return(
                                <tr>
                                <td onClick={()=>{this.handleCustomerDetails(customer._id)}}>{customer._id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.mobile}</td>
                                <td>{customer.email}</td>
                                <td><button onClick={()=>{this.handleUpdate(customer._id)}}>Update</button></td>
                                <td><button onClick={()=>{this.handleDelete(customer._id)}}>Delete</button></td>
                                </tr>
                            ) 
                        })}
                   
                    </tbody>
                    
                </table>
                <Modal isOpen={this.state.isModalOpen} onRequestClose={this.handleModalClose}
                style={{
                    overlay: {
                        background: 'grey',
                    },
                    content: {
                      color : 'orange'
                    }
                  }}
                  >
                <h2>Modal Title</h2>
                <UpdateCustomerModal id={this.state.id}/>
                <button onClick={this.handleModalClose}>Close</button>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        customersList : state.customersList
    }
}
export default withRouter(connect(mapStateToProps)(CustomerListTable))