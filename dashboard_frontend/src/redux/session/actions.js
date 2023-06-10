import api from "../../helpers/services/api";
import store from "../../redux/store";
import sessionActionTypes from "./action-types";


export const login = ({ email, password },callBack) =>  {

  return   async (dispatch) =>  {
  
    await api.post('/auth/sign_in',{
      email,
      password
    }).then((response) => { 
        dispatch({
          type: sessionActionTypes.LOGIN,
          payload: response.data,
          session: response.headers
        })
        callBack(response.data);
      })
      .catch(e => {callBack(null,e?.response?.data?.error || e)})
  }
}


export const logout = (callBack) =>  {

  return   async (dispatch) =>  {
  
    await api.delete('/auth/sign_out').then((response) => { 
        dispatch({
          type: sessionActionTypes.LOGOUT
        })
        callBack(response.data);
      })
      .catch(e => {callBack(null,e?.response?.data?.error || e)})
  }
}


export const signUp = (values ,callBack) =>  {

  return   async () =>  {
    await api.post('/auth',values).then((response) => { 
        callBack(response.data);
      })
      .catch(e => {callBack(null,e?.response?.data?.error || e)})
  }
}


