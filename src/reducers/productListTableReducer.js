const productsListInitialState = []
const productListTableReducer = (state=productsListInitialState,action)=>{
    switch(action.type){
        case 'PRODUCTS_LIST':{
            console.log(action.payload)
            return action.payload
        }
        default :{
            return state
    }
}
}
export default productListTableReducer