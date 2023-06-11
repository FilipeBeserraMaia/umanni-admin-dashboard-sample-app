import React, { useEffect, useState } from "react";
import { Formik,Form, Field } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import UserForm from './Form' 
import { editUser,updateUser } from "../../redux/users/actions";
import { useSelector } from "react-redux";

const Edit = (props)=> {
  const dispatch = useDispatch()
  const userId = props.custom.userId;
  useEffect(()=> { dispatch(editUser(userId,(res,err)=>{
    if(res){
    }
    if(err){
      return;
    }
  }))},[])

 const {collection} = useSelector((state)=> state.usersReducer);
 
 const [user] = collection.filter(u=> u.id == userId) 

 const initialValuesForm = {
    "first_name":user.first_name,
    "last_name": user.last_name,
    "email": user.email,
    "password":"",
    "password_confirmation":"",
    "user_role_attributes": { role_id: user.role.id },

    
  }

  debugger 


  const formValidations = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("this field is required ! "), 
    password: Yup.string().min(8,"must contain at least 8 characters"),
    password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'passwords do not match'),
    first_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
    last_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
  })
 



  const _onSubmit  = (values,{setSubmitting}) => {
      
     dispatch(updateUser(userId,values,(res,err)=>{
      if(res){
        props.custom.closeModal()
      }
      if(err){
        return;
      }
    }))
  }


  return (<UserForm  custom={ { onSubmit:  _onSubmit,initialValues: initialValuesForm,formValidations: formValidations }  } />)
};

export default Edit
