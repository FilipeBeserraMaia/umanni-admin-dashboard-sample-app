import React from "react";
import { Avatar,Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
const Login = ()=>{
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);
  const paperStyle={padding:20,height:'10%',width:300,margin:'20px auto' }
  const avatarStyle={backgroundColor:colors.greenAccent[500]}
  return (
    <Grid>

      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LoginIcon/></Avatar>
          <h2> Sign in </h2>
        </Grid>
        <TextField margin="normal" label='Username' placeholder="Enter username" fullWidth required/>
        <TextField  margin="normal" label='Password' type="password" placeholder="Enter password" fullWidth required/>

        <FormControlLabel
          control={
            <Checkbox 
              name="checkbox"
              color="primary"
            />
          }
          label="Remember me"
        />
      <Button variant="contained" type="submit" fullWidth>Sign In  </Button>
        {/* <Typography><Link href="#">Forgot password ? </Link></Typography> */}
        <Typography>Do you have any account ?<Link href="/sign_up"> Sign up ? </Link></Typography>
      </Paper>
    </Grid>
  )
}


export default Login
