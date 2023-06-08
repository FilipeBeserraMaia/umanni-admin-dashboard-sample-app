import axios from 'axios';
import store from '../../redux/store'


const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1'
});


api.interceptors.request.use(config =>{
  const state = store.getState();

  if (state.sessionReducer.isLogged)
    config.headers["Authorization"] = `${state.sessionReducer.user.user_token}`

  if (config.method === "POST" || config.method === "PUT")
    config.headers["Content-Type"] = "application/json; charset=UTF-8";

  return config;

})

export default api;
