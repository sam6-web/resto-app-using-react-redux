import {GETITEMS,ADDITEMS} from './types'
import Axios from 'axios'

export const getAllItems = (payload) =>({
        type : GETITEMS,
        payload : payload        
});
export function getItemsFromApi() {
    return (dispatch) =>
      Axios.get('http://localhost:8000/posts')
            .then((res) =>dispatch(getAllItems(res.data))
      );
};
export const addItems = (payload) =>({
    type : ADDITEMS,
    payload : payload        
});
export function addItemsToApi(res) {
  return (dispatch) =>
    Axios.post('http://localhost:8000/posts',res)
          .then((res) =>dispatch(addItems(res))
    );
};