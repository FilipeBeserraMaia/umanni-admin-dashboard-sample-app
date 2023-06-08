
import { Routes, Route } from "react-router-dom";
import {Navigate } from 'react-router-dom';
import Login from "../Login";
import SignUp from "../SignUp";
import { useSelector } from "react-redux";
import store from '../../../redux/store'
import UsersDashboard from "../../users_dashboard";
import HomePage from "../../home_page";
import MyProfile from "../../my_profile";
// import { Dashboard } from "../../dashboard";



const NavigateToRoot =  ()=> <Navigate to="/"/> 
const NavigateToLogin =  ()=> <Navigate to="/login"/> 

const alreadyLogged = (Component) => {
  return Component

  const state = store.getState();
  const isUserLogged =  state.sessionReducer.isLogged
  console.log(state)

    if (isUserLogged){
      return NavigateToRoot
    }

    return Component
}


const requireAuth = (Component = NavigateToRoot) => {
  // return Component
  const state = store.getState();
  const isUserLogged =  state.sessionReducer.isLogged
  console.log(state)
  if (isUserLogged){
      return Component
  }

  return  NavigateToLogin
}


const routeList= [
  {exact:true, path:"/login", component: Login, key:"login"},
  {exact:true, path:"/sign_up", component: SignUp, key:"sign_up"},
  {exact:true, path:"/users_dashboard", component: UsersDashboard, key:"users_dashboard"},
  {exact:true, path:"/my_profile", component: MyProfile, key:"my_profile"},
  // {exact:true, path:"/dashboard", component: Dashboard, key:"dashboard"},
  {exact:false, path:"/", component: HomePage , key:"root"},
  {exact:false, path:"*", component: NavigateToRoot , key:"not-found"},
]

const Router = () =>{
  return (
    <Routes>
      {routeList.map(r=> <Route exact={r.exact} path={r.path} Component={r.component} key={r.key}  /> )  }
    </Routes> 
  );
}

export default Router;
