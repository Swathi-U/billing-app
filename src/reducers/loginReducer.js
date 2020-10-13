const loginInitialState = {}
const loginReducer = (state=loginInitialState,action)=>{
    switch(action.type){
        case 'LOGIN':{
            localStorage.setItem('token',action.payload)
            console.log(action.payload)
            return action.payload
        }
        default:{
            return localStorage.getItem('token')
        }
    }
}


export default loginReducer