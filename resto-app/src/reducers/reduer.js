import {GETITEMS,ADDITEMS,DELETEITEMS,PUTITEMS,ADDUSER} from '../actions/types'
const initisalState = {menu :[],auth : []} 

const reducer = (state = initisalState , action)=>{
    if (action.type === GETITEMS) {
        return action.payload
    }
    else if (action.type === ADDITEMS){
        return [...state,action.payload]
    }
    else if (action.type === DELETEITEMS){
        return [...state,action.payload]
    }
    else if (action.type === PUTITEMS){
        return [...state,action.payload]
    }
    if(action.type === ADDUSER){
        return [...state,action.payload]
    }
    return state.menu
    

}

export default reducer