import React, { useEffect, useState } from "react";
import { Formik,Form, Field } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import UserForm from './Form' 
import { createUser } from "../../redux/users/actions";


const New = (props)=> {
  const dispatch = useDispatch()


  const _onSubmit  = (values,{setSubmitting}) => {

         dispatch(createUser(values,(res,err)=>{
          if(res){
            console.log("deu bomm")
            props.custom.closeModal()
          }
          if(err){
            console.log("deu ruim")
            return;
          }
        }))
  }

  
  return (<UserForm  custom={ { onSubmit:  _onSubmit }  } />)
};

export default New
