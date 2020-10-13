const customersListInitialState = []
const customerListTableReducer = (state=customersListInitialState,action)=>{
    switch(action.type){
        case 'CUSTOMERS_LIST':{
            console.log(action.payload)
            return action.payload
        }
        default :{
            return state
    }
}
}
export default customerListTableReducer