import React from 'react';
import {Link,Route,BrowserRouter, useHistory} from 'react-router-dom' 
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import UserProfile from './components/userProfile'
import Customers from './components/customers'
import Products from './components/products'
import Bills from './components/bills'
import CustomerDetail from './components/customerDetail'
import ProductDetail from './components/productDetail'
import CreateBill from './components/createBill'
import BillDetails from './components/billDetails'
function App(){
  return(
    <BrowserRouter>
      <div>
        <Link to='/'></Link>
        <Link to='/users/login'></Link>
        <Link to='/users/account'></Link>

        <Route path='/home' component={Home}/>
        <Route path='/' component={Register} exact={true}/>
        <Route path='/users/login' component={Login}/>
        <Route path='/users/account' component={UserProfile}/>
        <Route path='/customers' component={Customers} exact={true}/>
        <Route path='/customer/:id' component={CustomerDetail}/>
        <Route path='/products' component={Products} exact={true}/>
        <Route path='/product/:id' component={ProductDetail}/>
        <Route path='/bills' component={Bills} exact={true}/>
        <Route path='/bills/createbill' component={CreateBill} exact={true}/>
        <Route path='/bills/billdetails' component={BillDetails}/>
      </div>
    </BrowserRouter>
     
  )
}
export default App;
