import { combineReducers } from "redux";
import reducer from './reduer'

const allReducers = combineReducers({
    reducer: reducer
  });
  
export default allReducers