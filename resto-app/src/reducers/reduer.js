import {GETITEMS,ADDITEMS,DELETEITEMS} from '../actions/types'
const initisalState = {menu :[] } 

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
    return state.menu
}

export default reducer