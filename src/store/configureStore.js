import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import registerReducer from '../reducers/registerReducer'
import loginReducer from '../reducers/loginReducer'
import userProfileReducer from '../reducers/userProfileReducer'
import customersReducer from '../reducers/customersReducer'
import customerListTableReducer from '../reducers/customerListTableReducer'
import updateCustomerModalReducer from '../reducers/updateCustomerModalReducer'
import productsReducer from '../reducers/productsReducer'
import productListTableReducer from '../reducers/productListTableReducer'
import updateProductModalReducer from '../reducers/updateProductModalReducer'
import createBillReducer from '../reducers/createBillReducer'
import BillListReducer from '../reducers/billListReducer'
const configureStore = ()=>{
    const store = createStore(combineReducers({
        register : registerReducer,
        login : loginReducer,
        userProfile : userProfileReducer,
        customers : customersReducer,
        customersList : customerListTableReducer,
        updatedCustomer : updateCustomerModalReducer,
        products : productsReducer,
        productsList : productListTableReducer,
        updatedProduct : updateProductModalReducer,
        createBill : createBillReducer,
        billList : BillListReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore