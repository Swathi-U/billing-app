const userProfileInitialState = {}
const userProfileReducer = (state=userProfileInitialState,action)=>{
    switch(action.type){
        case 'USERDETAILS':{
            return action.payload 
        }
        default:{
            return {}
        }
    }
}
export default userProfileReducer