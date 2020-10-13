import React from 'react'
import {Link,withRouter} from 'react-router-dom'
class Home extends React.Component{
    constructor(){
        super()
    }
    
    handleProfile = ()=>{
        
        this.props.history.push('/users/account')
    }
    render(){
        return(
            <div>
                 <Link to='/home'>Home</Link>| <Link to='/customers'>Customers</Link>| <Link to='/products'>Products</Link>| <Link to='/bills'>Bills</Link>
                <select onClick={this.handleProfile}>
                    <option>My profile</option>
                </select>
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default withRouter(Home)