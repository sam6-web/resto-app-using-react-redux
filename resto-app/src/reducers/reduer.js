import {GETITEMS,ADDITEMS,DELETEITEMS,PUTITEMS,ADDUSER,GETCMD,ADDCMD,DELETECMD} from '../actions/types'
const initisalState = {menu :[],auth:[],panier:[]} 

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
    else if(action.type === ADDUSER){
        return [...state,action.payload]
    }
    else if (action.type === GETCMD) {
        return action.payload
    }
    else if (action.type === ADDCMD) {
        return [...state,action.payload]
    }
    else if (action.type === DELETECMD){
        return [...state,action.payload]
    }
    return state.menu,state.auth,state.panier
    

}

export default reducer