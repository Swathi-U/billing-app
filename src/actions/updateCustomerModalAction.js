import axios from 'axios'
export const setCustomerUpdate = (updatedCustomer)=>{
    return{type:'UPDATE_CUSTOMER',payload:updatedCustomer}
}
export const startGetCustomerUpdate = (formData,id)=>{
    return(dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,formData,{
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const updatedCustomer = response.data
            console.log(updatedCustomer)
            dispatch(setCustomerUpdate(updatedCustomer))
        })
    }
}