const productInitialState = {}
const productsReducer = (state=productInitialState,action)=>{
    switch(action.type){
        case 'CREATE_PRODUCT':{
            console.log(action.payload)
            return action.payload
        }
        case 'DELETE_PRODUCT':{
            console.log(action.payload)
            return action.payload
        }
        case 'GET_PRODUCT':{
            console.log(action.payload)
            return action.payload
        }
        default:{
            return state
        }
    }
}
export default productsReducer