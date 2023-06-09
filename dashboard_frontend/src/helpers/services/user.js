
import api from "../../helpers/services/api";


export const getAllUsersApi = (params= {} ) =>  {
  return  api.get('/users',params)
}

export const deleteUserApi = (userId,params={}) =>  {
  return  api.delete(`/users/${userId}`,params)
}
export const createUserApi = (params) =>  {
  return  api.post(`/users`,params)
}

export const editUserApi = (userId,params={}) =>  {
  return  api.get(`/users/${userId}/edit`,params)
}


export const updateUserApi = (userId,params) =>  {
  return  api.put(`/users/${userId}`,params)
}
