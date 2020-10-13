import React from 'react'
import {connect} from 'react-redux'
class LineItems extends React.Component{
    constructor(props){
        super(props)
            this.state={
                product : "",
                quantity : ""
            }
    }
    // handleProduct=(e)=>{
    //     const product = e.target.value
    //     this.setState({product})
        
    // }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    render(){
            return(
                <div>
                    {this.props.lineItems.map((lineItem,id)=>{
                        let product=`product-${id}`, quantity=`quantity-${id}`
                        console.log(id)
                        return(
                            <tr key={lineItem.index}>
                         <td>
                            <select onChange={this.handleChange}
                                    value={this.props.lineItems.product}
                                    id={product}
                                    data-id={id}
                                    name='product'>
                         <option>select</option>
                         {this.props.productsList.map((product)=>{
                             return(
                                <option key={product._id} value={product._id}>{product.name}</option>
                                )}
                             )
                             }
                     </select>
                           </td>
                           <td>
                                <input type='number'
                                        name='quantity'
                                        id={quantity}
                                        data-id={id}
                                        value={this.props.lineItems.quantity}
                                        onChange={this.handleChange}
                                />        
                           </td>
                           <td>
                           {id===0?<input type='button' onClick={()=>{this.props.add()}} value='add'/>:<input type='button' value='delete' onClick={(()=>{this.props.delete(lineItem)})}/>}
                            </td>
                            </tr>
                        )
                    })}
                    
                </div>
            )
        }
    }
const mapStateToProps=(state)=>{
    return{
        productsList : state.productsList
    }
}
export default connect(mapStateToProps)(LineItems)