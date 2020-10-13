import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {startGetProduct} from '../actions/productAction'
class ProductDetailModal extends React.Component{
    constructor(){
        super()

    }
    componentDidMount(){
        console.log(this.props)
        this.props.dispatch(startGetProduct(this.props.match.params.id))
    }
    handleSubmit=()=>{
        this.props.history.push('/products')
    }
    render(){
        return(
            <div>
                <h1>Product Details</h1>
                <h2>Id : {this.props.productDetail._id}</h2>
                <h2>Name : {this.props.productDetail.name}</h2>
                <h2>Price: {this.props.productDetail.price}</h2>
                <h2>User: {this.props.productDetail.user}</h2>
                <h2>CreatedAt : {this.props.productDetail.createdAt}</h2>
                <h2>UpdatedAt : {this.props.productDetail.updatedAt}</h2>
                <button onClick={this.handleSubmit}>Back</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        productDetail : state.products
    }
}
export default withRouter(connect(mapStateToProps)(ProductDetailModal))