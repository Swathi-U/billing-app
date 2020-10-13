const billListInitialState = []
const BillListReducer = (state=billListInitialState,action)=>{
    switch(action.type){
        case 'BILL_LIST':{
            console.log(action.payload)
            return action.payload
        }
        default :{
            return state
    }
}
}
export default BillListReducer