import {GETITEMS} from '../actions/types'
const initisalState = [] ; 

const reducer = (state = initisalState , action)=>{
    if (action.type === GETITEMS) {
        return action.payload
    }
    return state
}

export default reducer