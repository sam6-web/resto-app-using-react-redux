import { combineReducers } from "redux";
import reducer from './reduer'
import authReducer from './reduer'
import panierReducer from './reduer'

const allReducers = combineReducers({
    menu: reducer,
    /* authReducer: authReducer,
    panierReducer:panierReducer */
  });
  
export default allReducers 