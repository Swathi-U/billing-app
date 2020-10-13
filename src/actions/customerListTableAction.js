import axios from 'axios'
export const setCustomers = (customers)=>{
    return{type:'CUSTOMERS_LIST',payload:customers}
}
export const startGetCustomers = ()=>{
    return(dispatch)=>{
        axios.get("http://dct-billing-app.herokuapp.com/api/customers",{
            headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const customers = response.data
            console.log(customers)
            dispatch(setCustomers(customers))
        })
    }
}

