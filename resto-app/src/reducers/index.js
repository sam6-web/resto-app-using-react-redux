import { combineReducers } from "redux";
import menu from './reduer'

const allReducers = combineReducers({
    menu: menu
  });
  
export default allReducers