import React, { useEffect, useState } from "react";
import { Formik,Form, Field } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { editUser,updateUser } from "../../redux/users/actions";
import { useSelector } from "react-redux";
import { TextField } from "formik-material-ui";
import { Button } from "@mui/material";
import { errorToast,successToast } from "../../helpers/notifications/toasts";

const Edit = (props)=> {
  const dispatch = useDispatch()
  
 const {user} = useSelector((state)=> state.sessionReducer);
 
 const initialValuesForm = {
    "first_name":user.first_name,
    "last_name": user.last_name,
    // "email": user.email,
    "password":"",
    "password_confirmation":"",
    "file": user.avatar 
  }

  const formValidations = Yup.object().shape({
    // email: Yup.string().email("Invalid Email").required("this field is required ! "), 
    password: Yup.string().min(8,"must contain at least 8 characters"),
    password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'passwords do not match'),
    first_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
    last_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
  })
 


 const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    setFieldValue('file', file);
  };

  const _onSubmit  = (values,{setSubmitting}) => {
      
  debugger
   dispatch(updateUser(user.id,values,(res,err)=>{
      setSubmitting(false)  
      if(res){
        props.custom.closeModal()
        successToast("successfully edited")
      }
      if(err){
        err.response.data.errors.map(e=> errorToast(e))
        return;
      }
    }))
  }


  return (
    <Formik
      initialValues={initialValuesForm}
      validationSchema={formValidations}  

      onSubmit={_onSubmit} >
      {  ({isSubmitting,setFieldValue}) => (

        <Form>
          <Field name="first_name" label="First Name" placeholder="Enter First Name" type="text" margin="normal"  fullWidth component={TextField}/>
          <Field name="last_name" label="Last Name" placeholder="Enter Last Name" type="text" margin="normal"  fullWidth component={TextField}/>
          <input
              id="file"
              name="file"
              type="file"
              onChange={(event) => handleFileChange(event, setFieldValue)}
            />
          <Field name="password" label="Password" placeholder="Enter Password" type="password" margin="normal" fullWidth component={TextField}/>
          <Field name="password_confirmation" label="password_confirmation" placeholder="Enter Password Confirmation" type="password" margin="normal" fullWidth component={TextField}/>
          <Button href='' variant="contained" type="submit" fullWidth  disabled={isSubmitting} >Save</Button>
        </Form>
      )}
    </Formik>

  )
};

export default Edit
