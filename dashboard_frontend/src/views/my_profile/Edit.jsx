import React, { useEffect, useState } from "react";
import { Formik,Form, Field } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { editUser,updateUser } from "../../redux/users/actions";
import { useSelector } from "react-redux";
import { TextField } from "formik-material-ui";
import { Button } from "@mui/material";


const Edit = (props)=> {
  const dispatch = useDispatch()
  
 const {user} = useSelector((state)=> state.sessionReducer);
 
 const initialValuesForm = {
    "first_name":user.first_name,
    "last_name": user.last_name,
    "email": user.email,
    "password":"",
    "password_confirmation":""
  }

  const formValidations = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("this field is required ! "), 
    password: Yup.string().min(8,"must contain at least 8 characters"),
    password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'passwords do not match'),
    first_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
    last_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
  })
 



  const _onSubmit  = (values,{setSubmitting}) => {
      
   dispatch(updateUser(user.id,values,(res,err)=>{
      if(res){
        props.custom.closeModal()
      }
      if(err){
        return;
      }
    }))
  }


  return (
    <Formik
      initialValues={initialValuesForm}
      validationSchema={formValidations}  

      onSubmit={_onSubmit} >
      {  ({isSubmitting}) => (

        <Form>
          <Field name="first_name" label="First Name" placeholder="Enter First Name" type="text" margin="normal"  fullWidth component={TextField}/>
          <Field name="last_name" label="Last Name" placeholder="Enter Last Name" type="text" margin="normal"  fullWidth component={TextField}/>
          <Field name="email" label="Email" placeholder="Enter Email" type="text" margin="normal"  fullWidth component={TextField}/>
          <Field name="password" label="Password" placeholder="Enter Password" type="password" margin="normal" fullWidth component={TextField}/>
          <Field name="password_confirmation" label="password_confirmation" placeholder="Enter Password Confirmation" type="password" margin="normal" fullWidth component={TextField}/>
          <Button href='' variant="contained" type="submit" fullWidth  disabled={undefined} >Save</Button>
        </Form>
      )}
    </Formik>

  )
};

export default Edit
