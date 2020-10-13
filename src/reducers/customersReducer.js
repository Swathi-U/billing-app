const customerInitialState = {}
const customersReducer = (state=customerInitialState,action)=>{
    switch(action.type){
        case 'CREATE_CUSTOMER':{
            console.log(action.payload)
            return action.payload
        }
        case 'DELETE_CUSTOMER':{
            console.log(action.payload)
            return action.payload
        }
        case 'GET_CUSTOMER':{
            console.log(action.payload)
            return action.payload
        }
        default:{
            return state
        }
    }
}
export default customersReducer