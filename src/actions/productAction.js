import axios from 'axios'
export const setCreateProduct =(productDetails)=>{
    return{type:'CREATE_PRODUCT',payload:productDetails}
}
export const startGetCreateProduct = (formData)=>{
    return (dispatch)=>{
        console.log(formData)
        axios.post("http://dct-billing-app.herokuapp.com/api/products",formData,{
            headers : {
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const productDetails = response.data
            console.log(productDetails)
            dispatch(setCreateProduct(productDetails))
        })
    }
}
export const setDeleteProduct=(deletedProduct)=>{
    return{type:'DELETE_PRODUCT',payload:deletedProduct}
}
export const startGetDeleteProduct = (id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const deletedProduct = response.data
            console.log(deletedProduct)
            dispatch(setDeleteProduct(deletedProduct))
        })
    }
}
export const setProduct=(productDetails)=>{
    return{type:'GET_PRODUCT',payload:productDetails}
}
export const startGetProduct=(id)=>{
    return(dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const productDetails = response.data
            console.log(productDetails)
            dispatch(setProduct(productDetails))
        })
    }
}