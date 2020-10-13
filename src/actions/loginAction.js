import axios from 'axios'
export const setLogin = (token)=>{
    return {type:'LOGIN',payload:token}
}
export const startGetLogin = (formData)=>{
    return (dispatch)=>{
        axios.post("http://dct-billing-app.herokuapp.com/api/users/login",formData)
        .then((response)=>{
            const token = response.data
            console.log(token)
            dispatch(setLogin(token.token))
        })
    }
}