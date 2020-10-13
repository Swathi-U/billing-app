const updatedCustomerInitialState = {}
const updateCustomerModalReducer = (state=updatedCustomerInitialState,action)=>{
    switch(action.type){
        case 'UPDATE_CUSTOMER':{
            console.log(action.payload)
            return action.payload
        }
        default:{
            return state
        }
    }
}
export default updateCustomerModalReducer