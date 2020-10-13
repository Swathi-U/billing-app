import axios from 'axios'
export const setUserProfile = (userDetails)=>{
    return {type:'USERDETAILS',payload:userDetails}
}
export const startGetUserProfile = () =>{
    return (dispatch)=>{
        axios.get("http://dct-billing-app.herokuapp.com/api/users/account",{
            headers : {
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const userDetails = response.data
            console.log('userdetails',userDetails)
            dispatch(setUserProfile(userDetails))
        })
        
    }
}