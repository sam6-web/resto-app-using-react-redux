import { combineReducers } from "redux";
import reducer from './reduer'
import authReducer from './reducerAuth'
import panierReducer from './reducerPanier'
/* const x = this.props.users.filter(el => (el.email === this.state.emailConx)&&(el.password===this.state.passwordConx) )
 */
const allReducers = combineReducers({
    menu: reducer,
    users: authReducer,
    panier:panierReducer
  });
  
export default allReducers 