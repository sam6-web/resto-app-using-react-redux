import {
      GETITEMS,
      ADDITEMS,
      DELETEITEMS,
      PUTITEMS,
      ADDUSER,
      GETCMD,
      ADDCMD,
      DELETECMD      
      } from './types'

import Axios from 'axios'
/* ======== */
export const getAllItems = (payload) =>({
        type : GETITEMS,
        payload        
});
export const getItemsFromApi=()=> {
    return (dispatch) =>
      Axios.get('http://localhost:8000/posts')
            .then((res) =>dispatch(getAllItems(res.data))
      );
};
export const addItems = (payload) =>({
    type : ADDITEMS,
    payload,        
});
export const addItemsToApi=(res)=> {
  return (dispatch) =>(
        Axios.post('http://localhost:8000/posts',res)
          .then((res) =>dispatch(addItems(res.data)))
          );
};

export const deleteItem = (payload) =>({
      type : DELETEITEMS,
      payload,
})
export const deleteItemFromApi=(res)=>{
      return (dispatch)=>(
            Axios.delete(`http://localhost:8000/posts/${res}`)
                  .then((res)=>dispatch(deleteItem(res.data)),window.location.reload(true))
      )
}
export const putItems = (payload) =>({
      type : PUTITEMS,
      payload,    
})
export const putItemFromApi =(res)=>{
      return(dispatch)=>(
            Axios.put(`http://localhost:8000/posts/${res}`,{res})
                  .then((res)=>dispatch(putItems(res.data)),window.location.reload(true))
      )
}
/* export const getAllUser = (payload) =>({
      type : GETUSER,
      payload        
});
export const getUserFromApi=()=> {
  return (dispatch) =>
    Axios.get('http://localhost:8000/comments')
          .then((res) =>dispatch(getAllUser(res.data))
    );
}; */
export const addUser = (payload)=>({
      type : ADDUSER,
      payload
})

export const postUserToApi = (res) =>{
      return(dispatch)=>(
            Axios.post('http://localhost:8000/comments',res)
              .then((res) =>dispatch(addUser(res.data)))
              );
}

/* =========pour panier======= */
export const getAllCommande = (payload) =>({
      type : GETCMD,
      payload        
});
export const getCommandeFromApi=()=> {
  return (dispatch) =>
    Axios.get('http://localhost:8000/profile')
          .then((res) =>dispatch(getAllCommande(res.data))
    );
};
export const addCommand = (payload)=>({
      type : ADDCMD,
      payload
})

export const postCommandToApi = (res) =>{
      return(dispatch)=>(
            Axios.post('http://localhost:8000/profile',res)
              .then((res) =>dispatch(addCommand(res.data)),window.location.reload(true))
              );
}
export const deleteCommand = (payload) =>({
      type : DELETECMD,
      payload,
})
export const deleteCommandFromApi=(res)=>{
      return (dispatch)=>(
            Axios.delete(`http://localhost:8000/profile/${res}`)
                  .then((res)=>dispatch(deleteCommand(res.data)),window.location.reload(true))
      )
}