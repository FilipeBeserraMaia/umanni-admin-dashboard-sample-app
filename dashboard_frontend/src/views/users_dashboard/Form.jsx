import React, { useEffect, useState } from "react";
import { Avatar,Box,Button, Checkbox, FormControlLabel, Grid, Link, Paper,Typography } from "@mui/material";
import { TextField } from "formik-material-ui";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Formik,Form, Field } from "formik";
import * as Yup from 'yup';


const UserForm = (props)=>{
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);


  const initialValuesForm = (customInitialValues) => {

    return (
      customInitialValues 
        ? 
        customInitialValues
        :
        {
          "first_name":"",
          "last_name": "",
          "email": "",
          "password":"",
          "password_confirmation":""
        }
    )


  }
  const formValidations = (customValidation)=> {
    return (customValidation
      ? 
      customValidation
      : 
      Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("this field is required ! "), 
        password: Yup.string().required('this field is required ! ').min(8,"must contain at least 8 characters"),
        password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'passwords do not match'),
        first_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
        last_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
      })
    )}

  const _onSubmit = props.custom.onSubmit
  return (
    <Formik
      initialValues={initialValuesForm(props.custom.initialValues)}
      validationSchema={formValidations(props.custom.formValidations)}  

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
  )}

export default UserForm 
