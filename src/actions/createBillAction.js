import axios from 'axios'
export const setCreateBill=(createdBill)=>{
    return{type:'CREATE_BILL',payload:createdBill}
}
export const startGetCreateBill =(formData)=>{
    return(dispatch)=>{
        axios.post("http://dct-billing-app.herokuapp.com/api/bills",formData,{
            headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const createdBill = response.data
            console.log(createdBill)
            dispatch(setCreateBill(createdBill))
        })
    }
}
export const setDeleteBill=(deletedBill)=>{
    return{type:'DELETE_BILL',payload:deletedBill}
}
export const startGetDeleteBill=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const deletedBill = response.data
            console.log(deletedBill)
            dispatch(setDeleteBill(deletedBill))
        })
    }
}