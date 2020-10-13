import React from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
class BillDetails extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div>
                <h1>Bill</h1>
                <h2>Bill Id-{this.props.createBill._id}</h2>
                <h2>Date-{this.props.createBill.date}</h2>
                <h2>customer-{this.props.createBill.customer}</h2>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>product</th>
                            <th>quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {Object.values(this.props.createBill).map((bill,index)=>{
                        if(index === 3){
                            return(
                                bill.map((lineItem)=>{
                                    console.log(lineItem)
                                    return(
                                        <tr>
                                            <td>{lineItem.product}</td>
                                    <td>{lineItem.quantity}</td>
                                        </tr>
                                        
                                    )
                                })
                            )
                        }
                        
                    })}
                       
                    </tbody>
                </table>
                <h2>User-{this.props.createBill.user}</h2>
                <h2>CreatedAt-{this.props.createBill.createdAt}</h2>
                <h2>UpdatedAt-{this.props.createBill.updatedAt}</h2>
                <h2>Total-{this.props.createBill.total}</h2>
                <Link to='/bills'><button>Back</button></Link>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        createBill : state.createBill,
        billList : state.billList
    }
}
export default connect(mapStateToProps)(withRouter(BillDetails))