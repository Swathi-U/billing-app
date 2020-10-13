import axios from 'axios'
export const setProductUpdate = (updatedProduct)=>{
    return{type:'UPDATE_PRODUCT',payload:updatedProduct}
}
export const startGetProductUpdate = (formData,id)=>{
    return(dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`,formData,{
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const updatedProduct = response.data
            console.log(updatedProduct)
            dispatch(setProductUpdate(updatedProduct))
        })
    }
}