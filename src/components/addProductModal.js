import React from 'react'
import {startGetCreateProduct} from '../actions/productAction'
import {startGetProducts} from '../actions/productListTableAction'
import {connect} from 'react-redux'
class AddProductModal extends React.Component{
    constructor(){
        super()
        this.state = {
            name : '',
            price : ''
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
            price : this.state.price
        }
        this.props.dispatch(startGetCreateProduct(formData))
        this.props.dispatch(startGetProducts())
    }
    render(){
        return(
            <div>
                    <h1>Add Product</h1>
                    <h2>Name</h2>
                    <input  type='text' 
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                     />  
                     <h2>Price</h2>
                    <input  type='number' 
                            name='price'
                            value={this.state.price}
                            onChange={this.handleChange}
                     />      
                     <button onClick={this.handleSubmit}>Add Product</button>
            </div>
        )
    }
}
export default connect()(AddProductModal)