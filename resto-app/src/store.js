import allReducer from './reducers'
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
console.log(store.getState())
export default store