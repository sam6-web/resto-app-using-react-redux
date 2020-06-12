import { combineReducers } from "redux";
import reducer from './reduer'
import authReducer from './reduer'

const allReducers = combineReducers({
    menu: reducer,
    auth: authReducer
  });
  
export default allReducers 