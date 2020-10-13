const createBillInitialState = {}
const createBillReducer = (state=createBillInitialState,action)=>{
    switch(action.type){
        case 'CREATE_BILL':{
            console.log(action.payload)
            return action.payload
        }
        case 'DELETE_BILL':{
            console.log(action.payload)
            return action.payload
        }
        default :{
            return state
    }
}
}
export default createBillReducer