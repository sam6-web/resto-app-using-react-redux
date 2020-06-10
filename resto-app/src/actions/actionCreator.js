import {GETITEMS,ADDITEMS,DELETEITEMS} from './types'
import Axios from 'axios'

export const getAllItems = (payload) =>({
        type : GETITEMS,
        payload        
});
export function getItemsFromApi() {
    return (dispatch) =>
      Axios.get('http://localhost:8000/posts')
            .then((res) =>dispatch(getAllItems(res.data))
      );
};
export const addItems = (payload) =>({
    type : ADDITEMS,
    payload,        
});
export function addItemsToApi(res) {
  return (dispatch) =>(
        Axios.post('http://localhost:8000/posts',res)
          .then((res) =>dispatch(addItems(res.data)))
          );
};

export const deleteItem = (payload) =>({
      type : DELETEITEMS,
      payload,
})
export function deleteItemFromApi(res){
      return (dispatch)=>(
            Axios.delete(`http://localhost:8000/posts/${res}`)
                  .then((res)=>dispatch(deleteItem(res.data)))
      )
}
