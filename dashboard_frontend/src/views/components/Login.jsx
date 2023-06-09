import React, { useEffect, useState } from "react";
import { Avatar,Box,Button, Checkbox, FormControlLabel, Grid, Link, Paper,Typography } from "@mui/material";
import { TextField } from "formik-material-ui";
import LoginIcon from '@mui/icons-material/Login';
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import ThemeButton from "./ThemeButton";
import { Formik,Form, Field } from "formik";
import * as Yup from 'yup';
// import { useHistory } from 'react-router-dom';

// import store from '../../redux/store';
 
import { login } from "../../redux/session/actions";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import rootReducer from "../../redux/root-reducer";
const Login = ()=>{
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const paperStyle={padding:20,height:'10%',width:300,margin:'20px auto' }
  const avatarStyle={backgroundColor:colors.greenAccent[500]}
  const dispatch = useDispatch()
  const history = useNavigate();
  const {isLogged,user} = useSelector((rootReducer)=> rootReducer.sessionReducer);

  useEffect(()=>{
    if(isLogged){
     history('/')
    }
  })

  
  const initialValuesForm = { email:"filipeifgcc@gmail.com", password:"12345679" }
  const formValidations = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("this field is required ! "), 
    password: Yup.string().required('this field is required ! '),
  })

  const _onSubmit  = (values,{setSubmitting}) => {

    dispatch(login(values,(res,err)=>{
      setSubmitting(false);
      if(res){
        console.log(res)
      }
      if(err){
        console.log(err)
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
        <Typography>Do you have any account ?<Link href="/sign_up"> Sign up ? </Link></Typography>
      </Paper>
    </Grid>
  )}

export default Login
