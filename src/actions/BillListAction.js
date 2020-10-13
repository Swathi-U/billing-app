import axios from 'axios'
export const setBillList=(BillList)=>{
    return{type:'BILL_LIST',payload:BillList}
}
export const startGetBillList =()=>{
    return(dispatch)=>{
        axios.get("http://dct-billing-app.herokuapp.com/api/bills",{
            headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const BillList = response.data
            console.log(BillList)
            dispatch(setBillList(BillList))
        })
    }
}