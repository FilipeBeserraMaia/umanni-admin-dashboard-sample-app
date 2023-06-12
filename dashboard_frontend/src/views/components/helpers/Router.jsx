
import React from "react";
import { Routes, Route } from "react-router-dom";
import {Navigate } from 'react-router-dom';
import Login from "../Login";
import SignUp from "../SignUp";
import { useSelector } from "react-redux";
import UsersDashboard from "../../users_dashboard";
import HomePage from "../../home_page";
import MyProfile from "../../my_profile";



const NavigateToRoot =  ()=> <Navigate to="/"/> 
const NavigateToLogin =  ()=> <Navigate to="/login"/> 
const NavigateToMyProfile =  ()=> <Navigate to="/my_profile"/> 
const NavigateToUsersDashboard =  ()=> <Navigate to="/users_dashboard"/> 


const alreadyLogged = (Component) => {
  const VERIFY = () => {
    const {isLogged,user} =  useSelector(state => state.sessionReducer)

    if(isLogged){
      if(user.role.name == "admin"){
        return  <NavigateToUsersDashboard/>
      }else if(user.role.name == "user"){
        return <NavigateToMyProfile/>
      }
    }else{
      return <Component/>
    }

  }
  return  VERIFY;
}


const requireAuth = (Component) => {
  const VERIFY = () => {
    const isLogged =  useSelector(state => state.sessionReducer.isLogged)
    return isLogged
      ?
      <Component/>
      :
      <NavigateToLogin/>
  }
  return  VERIFY;
}


const routeList= [
  {exact:true, path:"/login", component: alreadyLogged(Login), key:"login"},
  {exact:true, path:"/sign_up", component: alreadyLogged(SignUp), key:"sign_up"},
  {exact:true, path:"/users_dashboard", component: requireAuth(UsersDashboard), key:"users_dashboard"},
  {exact:true, path:"/my_profile", component: requireAuth(MyProfile), key:"my_profile"},
  {exact:false, path:"/", component: requireAuth(HomePage) , key:"root"},
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
