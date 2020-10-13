import React from 'react'
import {startGetProducts} from '../actions/productListTableAction'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UpdateProductModal from './updateProductModal'
import {startGetDeleteProduct} from '../actions/productAction'
class ProductListTable extends React.Component{
    constructor(){
        super()
        this.state = {
            isModalOpen : false,
            id : 0,
            productDetail : {}
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetProducts())
    }
    handleModalClose = ()=>{
        this.setState({isModalOpen:false})
        this.props.dispatch(startGetProducts())
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
        this.props.dispatch(startGetDeleteProduct(id))
        
    }
    handleProductDetails=(productId)=>{
       this.props.history.push(`/product/${productId}`)
       
    }
    render(){
        return(
            <div>
                <table border='1'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>User</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.productsList.map((product)=>{
                            return(
                                <tr>
                                <td onClick={()=>{this.handleProductDetails(product._id)}}>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.user}</td>
                                <td><button onClick={()=>{this.handleUpdate(product._id)}}>Update</button></td>
                                <td><button onClick={()=>{this.handleDelete(product._id)}}>Delete</button></td>
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
                <UpdateProductModal id={this.state.id}/>
                <button onClick={this.handleModalClose}>Close</button>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        productsList : state.productsList
    }
}
export default withRouter(connect(mapStateToProps)(ProductListTable))