import React, { useEffect, useState } from "react";
import { Avatar,Box,Button, Checkbox, FormControlLabel, Grid, Link, Paper,Typography } from "@mui/material";
import { TextField } from "formik-material-ui";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Formik,Form, Field } from "formik";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import ThemeButton from "./ThemeButton";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {useNavigate } from "react-router-dom";
import { signUp } from "../../redux/session/actions";
import { errorToast,successToast } from "../../helpers/notifications/toasts";
const SignUp = ()=>{
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const paperStyle={padding:20,height:'10%',width:300,margin:'20px auto' }
  const avatarStyle={backgroundColor:colors.greenAccent[500]}
  const dispatch = useDispatch()
  const history = useNavigate()
  const _onSubmit  = (values,{setSubmitting}) => {

    dispatch(signUp(values,(res,err)=>{
      setSubmitting(false);
      if(res){
        successToast("successfully created user");
        history("/login")
        return
      }
      if(err){
        const errors = Object.values(err.response.data.errors);
        errors.map( v=> errorToast(v.toString())) 
        return;
      }
    }))
  }



  const initialValuesForm = (customInitialValues) => {

    return (
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
    return ( 
      Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("this field is required ! "), 
        password: Yup.string().required('this field is required ! ').min(8,"must contain at least 8 characters"),
        password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'passwords do not match'),
        first_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
        last_name: Yup.string().required("Required").min(3,"must contain at least 3 characters"),
      })
    )}

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>

        <Box 
          display="flex"
          justifyContent="space-between"
        >
          <ThemeButton/>
        </Box>
        <Grid align='center'>
          <Avatar style={avatarStyle}><PersonAddIcon/></Avatar>
          <h2> Sign in </h2>
        </Grid>
        <Formik
          initialValues={initialValuesForm()}
          validationSchema={formValidations()}  

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
      </Paper>
    </Grid>

  )}




export default SignUp
