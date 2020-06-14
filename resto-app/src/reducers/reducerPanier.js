/* import {GETCMD,ADDCMD,DELETECMD} from '../actions/types'
const initisalState = {panierReducer :[]} 

const panierReducer = (state = initisalState , action)=>{
    if (action.type === GETCMD) {
        return action.payload
    }
    else if (action.type === ADDCMD) {
        return [...state,action.payload]
    }
    else if (action.type === DELETECMD){
        return [...state,action.payload]
    }
    
    
    return state.panierReducer
    

}


export default panierReducer */