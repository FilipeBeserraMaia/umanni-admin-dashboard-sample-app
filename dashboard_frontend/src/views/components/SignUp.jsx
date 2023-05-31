import React from "react";
import { Avatar,Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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
          <Avatar style={avatarStyle}><PersonAddIcon/></Avatar>
          <h2> Sign up </h2>
        </Grid>
        

        <TextField margin="normal" label='name' placeholder="Name" fullWidth required/>
        <TextField margin="normal" label='email' placeholder="email" fullWidth required/>
        <TextField  margin="normal" label='Password' type="password" placeholder="Enter password" fullWidth required/>
        <TextField  margin="normal" label='confirm Password' type="password" placeholder="type same password again " fullWidth required/>
        <TextField margin="normal" type="file" label='Avatar Image' placeholder="" fullWidth/>
        <FormControlLabel
          control={
            <Checkbox 
              name="checkbox"
              color="primary"
            />
          }
          label="I accept the terms and conditions"
        />
      {/* <Button variant="contained" type="submit" fullWidth>Sign In  </Button> */}
      </Paper>
    </Grid>
  )
}


export default Login
