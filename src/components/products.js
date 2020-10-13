import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import AddProductModal from './addProductModal'
import ProductListTable from './productListTable'
import {startGetProducts} from '../actions/productListTableAction'
class Products extends React.Component{
    constructor(){
        super()
        this.state = {
            isModalOpen : false,
            searchName : ''
        }
    }
    handleAddProduct = ()=>{
        this.setState({isModalOpen:true})
    }
    handleModalClose = ()=>{
        this.setState({isModalOpen:false})
        this.props.dispatch(startGetProducts())
    }
    handleChange=(e)=>{
        const searchName = e.target.value
        this.setState({searchName:searchName})
    }
    render(){
        return(
            <div>
                    <h1>List of Products </h1>
                    <button onClick={this.handleAddProduct}>+Product</button>
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
                <AddProductModal/>
                <button onClick={this.handleModalClose}>Close</button>
                </Modal>
                <ProductListTable/>
            </div>
        )
    }
}
export default connect()(Products)