import {GETITEMS,ADDITEMS} from '../actions/types'
const initisalState = {menu :[] } 

const reducer = (state = initisalState , action)=>{
    if (action.type === GETITEMS) {
        return action.payload
    }
    else if (action.type === ADDITEMS){
        return action.payload
    }
    return state.menu
}

export default reducer