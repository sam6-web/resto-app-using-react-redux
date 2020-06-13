import {GETUSER,ADDUSER} from '../actions/types'

const initialeState = {auth : []}

const authReducer = (state = initialeState,action)=>{
    if (action.type === GETUSER) {
        return action.payload
    }
    else if(action.type === ADDUSER){
        return [...state,action.payload]
    }
    return state.auth
}
export default authReducer