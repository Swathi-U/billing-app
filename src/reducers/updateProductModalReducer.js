const updatedProductInitialState = {}
const updateProductModalReducer = (state=updatedProductInitialState,action)=>{
    switch(action.type){
        case 'UPDATE_PRODUCT':{
            console.log(action.payload)
            return action.payload
        }
        default:{
            return state
        }
    }
}
export default updateProductModalReducer