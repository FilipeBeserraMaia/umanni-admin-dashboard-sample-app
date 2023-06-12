import React, { useEffect, useState } from "react";
import { Avatar,Box,Button, Checkbox, FormControlLabel, Grid, Link, Paper,Typography } from "@mui/material";
import { TextField } from "formik-material-ui";
import LoginIcon from '@mui/icons-material/Login';
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import ThemeButton from "./ThemeButton";
import { Formik,Form, Field } from "formik";
import * as Yup from 'yup'; 
import { login } from "../../redux/session/actions";
import { useDispatch,useSelector } from "react-redux";
import { errorToast,successToast } from "../../helpers/notifications/toasts";

const Login = ()=>{
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const paperStyle={padding:20,height:'10%',width:300,margin:'20px auto' }
  const avatarStyle={backgroundColor:colors.greenAccent[500]}
  const dispatch = useDispatch()

 
  
  const initialValuesForm = { email:"filipe@gmail.com", password:"12345678" }
  const formValidations = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("this field is required ! "), 
    password: Yup.string().required('this field is required ! '),
  })

  const _onSubmit  = (values,{setSubmitting}) => {

    dispatch(login(values,(res,err)=>{
      setSubmitting(false);
      if(res){
        successToast("Successfully logged in");
        return;
      }
      if(err){
        err.response.data.errors.map(e=> errorToast(e))
        return;
      }
    }))

  };

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
          <Avatar style={avatarStyle}><LoginIcon/></Avatar>
          <h2> Sign in </h2>
        </Grid>
        <Formik
          /* enableReinitialize */
          initialValues={initialValuesForm}
          validationSchema={formValidations}  

          onSubmit={_onSubmit} >
          {  ({isSubmitting}) => (
            <Form>
              <Field name="email" label="Email" placeholder="Enter Email" type="text" margin="normal"  fullWidth component={TextField}/>
              <Field name="password" label="Password" placeholder="Enter Password" type="password" margin="normal" fullWidth component={TextField}/>

              <Button href='' variant="contained" type="submit" fullWidth  disabled={undefined} >Sign In  </Button>
            </Form>
          )}

        </Formik>
        <Typography> Are you a visitor? 
          <Link 
            href="/sign_up"
            > Sign up ? </Link>
        </Typography>
      </Paper>
    </Grid>
  )}

export default Login
