import { getAllUsersApi, deleteUserApi } from "../../helpers/services/user";
import usersActionTypes from "./action-types";
import api from "../../helpers/services/api";

export const usersIndex = (callBack) =>  {

  return   (dispatch) =>  {
    getAllUsersApi().then(({data}) => {
        dispatch({
          type: usersActionTypes.INDEX,
          payload: data
        })
        callBack(data);
      })
      .catch(e => {callBack(null,e?.response?.data?.error || e)})
  }
}


export const deleteUser = (userId,callBack) =>  {

  return   (dispatch) =>  {
    deleteUserApi(userId).then(({data}) => {
        dispatch({
          type: usersActionTypes.DELETE,
          payload: data,
          deletedUserId: userId
        })
        callBack(data);
      })
      .catch(e => {callBack(null,e?.response?.data?.error || e)})
  }
}
