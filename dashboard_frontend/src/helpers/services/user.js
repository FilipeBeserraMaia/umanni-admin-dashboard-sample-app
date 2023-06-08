
import api from "../../helpers/services/api";


export const getAllUsersApi = (params= {} ) =>  {
  return  api.get('/users',params)
}

export const deleteUserApi = (userId,params={}) =>  {
  return  api.delete(`/users/${userId}`,params)
}
