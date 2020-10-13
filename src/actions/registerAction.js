import axios from 'axios'
export const setRegister = (registerDetails)=>{
    return {type:'REGISTER',payload:registerDetails}
}
export const startGetRegister = (formData) =>{
    return (dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register',formData)
        .then((response)=>{
            const registerDetails = response.data
            console.log(registerDetails)
            
            dispatch(setRegister(registerDetails))
        })
    }
}