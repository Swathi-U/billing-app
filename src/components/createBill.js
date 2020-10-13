import React from 'react'
import Calendar from 'react-calendar'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import LineItems from './lineItems'
import {startGetCreateBill} from '../actions/createBillAction'
class CreateBill extends React.Component{
    constructor(props){
        super()
        this.state={
            date : new Date(),
            customer: "",
            lineItems : [
                         {  
                             index : Math.random(),
                            product : "",
                            quantity : ""
                         }
                        ]
        }
    }
    handleDate=(date)=>{
        this.setState({date})
    }
    handleChange = (e) =>{
        if (["product","quantity"].includes(e.target.name)) {
            let lineItems = [...this.state.lineItems]
            lineItems[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    handleAddRow=()=>{
        this.setState((prevState)=>{
            return{
                lineItems : [...prevState.lineItems,{
                    index : Math.random(),
                    product : "",
                    quantity : ""
                }]
            }
        })
    }
    handleDeleteRow=(lineItem)=>{
        this.setState({
            lineItems : this.state.lineItems.filter(item=>item !== lineItem)
        })
    }
    handleCreateBill=(e)=>{
        e.preventDefault()
        const formData={
            date : this.state.date,
            customer : this.state.customer,
            lineItems :this.state.lineItems  
        }
        this.props.dispatch(startGetCreateBill(formData))
        this.props.history.push('/bills/billdetails',this.state.lineItems)
    }
    render(){
        return(
            <form onSubmit={this.handleCreateBill} onChange={this.handleChange}>
            <div>
                
                <h1>Create Bill</h1>
                <Calendar onChange={this.handleDate}
                            name='date'
                            value={this.state.date}
                />
                <h2>Customer</h2>
                <select onChange={this.handleChange}
                        value={this.state.customer}
                        name='customer'>
                         <option>select</option>
                         {this.props.customersList.map((customer)=>{
                             return(
                                <option key={customer._id} value={customer._id}>{customer.name}</option>
                                )}
                             )
                             }
                     </select>
                <table border='1'>
                    <thead>
                        <th>Item</th>
                        <th>quantity</th>
                    </thead>
                    <tbody>
                    <LineItems add={this.handleAddRow} 
                                delete={this.handleDeleteRow} onChange={this.handleChange} lineItems={this.state.lineItems}
                                date={this.state.date}
                                customer={this.state.customer}
                                createBill={this.handleCreateBill}
                    />
                        <td>
                            <input type='button' onClick={this.handleAddRow} value='add'/>
                        </td>
                    </tbody>
                </table>
                <input type="submit" value="Create Bill"/>
               
            </div>
            </form>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        customersList :state.customersList,
        productsList : state.productsList
    }
}
export default withRouter(connect(mapStateToProps)(CreateBill))