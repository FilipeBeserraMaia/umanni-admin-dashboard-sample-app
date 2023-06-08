import api from "../../helpers/services/api";
import store from "../../redux/store";
import sessionActionTypes from "./action-types";


export const login = ({ email, password },callBack) =>  {


  return   (dispatch) =>  {
    api.post('/auth/sign_in',{
      email,
      password
    }).then(({data}) => {
        dispatch({
          type: sessionActionTypes.LOGIN,
          payload: data
        })
        callBack(data);
      })
      .catch(e => {callBack(null,e?.response?.data?.error || e)})
  }
}
