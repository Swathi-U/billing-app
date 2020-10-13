import React from 'react'
import {connect} from 'react-redux'
import {startGetProductUpdate} from '../actions/updateProductModalAction'
import { startGetProducts } from '../actions/productListTableAction'
class UpdateProductModal extends React.Component{
    constructor(){
        super()
        this.state={
            name : '',
            price : ''
        }
    }
    handleSubmit=()=>{
        console.log(this.props.id)
        const formData = {
            name : this.state.name,
            price : this.state.price,
        }
        this.props.dispatch(startGetProductUpdate(formData,this.props.id))
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Update Product</h1>
                <h2>Name</h2>
                <input type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                />
                <h2>Price</h2>
                <input type='number'
                        name='price'
                        value={this.state.price}
                        onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Update Product</button>
            </div>
        )
    }
}
export default connect()(UpdateProductModal)