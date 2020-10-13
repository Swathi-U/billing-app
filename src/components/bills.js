import React from 'react'
import {startGetBillList} from '../actions/BillListAction'
import {connect} from 'react-redux'
import {startGetDeleteBill} from '../actions/createBillAction'
import {withRouter} from 'react-router-dom'
class Bills extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.props.dispatch(startGetBillList())
    }
    handleCreateBill=()=>{
        this.props.history.push('/bills/createbill')
    }
    handleDelete=(id)=>{
        this.props.dispatch(startGetDeleteBill(id))
    }
    render(){
        return(
            <div>
                <h1>List of Bills </h1>
                <button onClick={this.handleCreateBill}>Create Bill</button>
                <h1>List Of Bills</h1>
                <table border='1'>
                    <thead>
                        <tr>
                        <th>Billid</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>LineItems</th>
                        <th>Total</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.billList.map((bill,index)=>{
                            return(
                                <tr>
                                    <td>{bill._id}</td>
                            <td>{bill.user}</td>
                            <td>{bill.date}</td>
                            <td>{bill.customer}</td>
                            <td>{bill.lineItems.map((lineItem)=>{
                                return(
                                    <ul>
                                        <li>product-{lineItem.product}</li>
                                <li>quantity-{lineItem.quantity}</li>
                                    </ul>
                                
                                )
                            })}</td>
                            <td>{bill.total}</td>
                            <td><button onClick={()=>{this.handleDelete(bill._id)}}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        billList : state.billList
    }
}
export default connect(mapStateToProps)(withRouter(Bills))