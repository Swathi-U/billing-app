import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import AddCustomerModal from './addCustomerModal'
import CustomerListTable from './customerListTable'
import {startGetCustomers} from '../actions/customerListTableAction'
class Customers extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isModalOpen : false,
            searchName : ''
        }
    }
    handleAddCustomer = ()=>{
        this.setState({isModalOpen:true})
    }
    handleModalClose = ()=>{
        this.setState({isModalOpen:false})
        this.props.dispatch(startGetCustomers())
    }
    handleChange=(e)=>{
        const searchName = e.target.value
        const name = this.props.customerListTable.filter(customer=>customer.name !== searchName)
        console.log(name)
        this.setState({searchName:name})

    }
    render(){
        return(
            <div>
                    <h1>List of Customers </h1>
                    <button onClick={this.handleAddCustomer}>+customer</button>
                    <input type='text'
                            name='searchName'
                            value={this.state.searchName}
                            onChange={this.handleChange}
                    />        
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
                <AddCustomerModal/>
                <button onClick={this.handleModalClose}>Close</button>
                </Modal>
                <CustomerListTable/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        customerListTable :state.customerListTable
    }
}
export default connect(mapStateToProps)(Customers)