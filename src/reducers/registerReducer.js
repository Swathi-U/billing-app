const registerInitialState = {}
const registerReducer = (state=registerInitialState,action)=>{
    switch(action.type){
        case 'REGISTER':{
            console.log('action',action.payload)
        }
        default:{
            return {}
        }
    }
}
export default registerReducer