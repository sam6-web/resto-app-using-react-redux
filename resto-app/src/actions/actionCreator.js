import {GETITEMS} from './types'
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
  }