import axios from 'axios'
export const setCreateCustomer =(customerDetails)=>{
    return{type:'CREATE_CUSTOMER',payload:customerDetails}
}
export const startGetCreateCustomer = (formData)=>{
    return (dispatch)=>{
        console.log(formData)
        axios.post("http://dct-billing-app.herokuapp.com/api/customers",formData,{
            headers : {
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const customerDetails = response.data
            console.log(customerDetails)
            dispatch(setCreateCustomer(customerDetails))
        })
    }
}
export const setDeleteCustomer=(deletedCustomer)=>{
    return{type:'DELETE_CUSTOMER',payload:deletedCustomer}
}
export const startGetDeleteCustomer = (id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const deletedCustomer = response.data
            console.log(deletedCustomer)
            dispatch(setDeleteCustomer(deletedCustomer))
        })
    }
}
export const setCustomer=(customerDetails)=>{
    return{type:'GET_CUSTOMER',payload:customerDetails}
}
export const startGetCustomer=(id)=>{
    return(dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const customerDetails = response.data
            console.log(customerDetails)
            dispatch(setCustomer(customerDetails))
        })
    }
}