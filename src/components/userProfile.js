import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {startGetUserProfile} from '../actions/userProfileAction'
class UserProfile extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        console.log('token',this.props.token)
        this.props.dispatch(startGetUserProfile(this.props.token))
    }
    handleSubmit = ()=>{
        this.props.history.push('/home')
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>UserProfile</h1>
                <h2>username : {this.props.userProfile.username}</h2>
                <h2>Email : {this.props.userProfile.email}</h2>
                <h2>Business Name : {this.props.userProfile.businessName}</h2>
                <h2>Address : {this.props.userProfile.address}</h2>
                <h2>createdAt : {this.props.userProfile.createdAt}</h2>
                <h2>UpdatedAt : {this.props.userProfile.updatedAt}</h2>
                <input type='submit' value='Back'/>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        token : state.login,
        userProfile : state.userProfile
    }
}
export default connect(mapStateToProps)(withRouter(UserProfile))