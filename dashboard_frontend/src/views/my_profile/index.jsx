import Header from "../components/Header";
import { Box, Grid, Paper,useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { useSelector } from "react-redux";
import PopUp from "../components/PopUp";
import EditIcon from '@mui/icons-material/Edit';
import Edit from "./Edit"
import { useEffect } from "react";
import { errorToast,successToast } from "../../helpers/notifications/toasts";
import { deleteUser } from "../../redux/users/actions";
import { logout } from "../../redux/session/actions";
import { useDispatch } from "react-redux";
import { DeleteForever } from "@mui/icons-material";
import { Button } from "@mui/material";

const MyProfile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const paperStyle={padding:10,height:'10%',width:'auto',margin:'20px auto' }
  const {isLogged,user,session} = useSelector((state)=> state.sessionReducer); 
  const  dispatch = useDispatch()
  const formatDate = (date) => {
    const match = date.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
    return match ? `${match[3]}/${match[2]}/${match[1]} às ${match[4]}:${match[5]}:${match[6]}` : 'invalid date';
  }


  const deleteMyProfile = ()=> {
    dispatch(deleteUser(user.id,(res,err)=>{
      if(res){
        successToast("Your profile has been successfully deleted")
      }
      if(err){
        errorToast("you Cannot delete this profile")
        return;
      }
    }))
  }






return (

  <Box m="5%">
    <Header title="Users Dashboard" subtitle="Managing the users" />
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Box 
          display="flex"
          justifyContent="space-between"
        >
        </Box>
        <Grid align='center'>
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="50px"
                height="50px"
                src={ user.url_file ? user.url_file :  `../../../assets/user.png`}
                style={{ cursor: "pointer",
                  borderRadius: "50%",
                  border:'10px',
                  borderColor:colors.primary[100] }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h1"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                {user.first_name} 
              </Typography>
              <Typography variant="h4" color={colors.grey[300]}>
                {user.role.name}
              </Typography>

              <Button type="button" onClick={()=> {deleteMyProfile()}}>
                <Typography color={colors.redAccent[500]} sx={{ ml: "5px" }}>
                  <DeleteForever/>
                </Typography>
              </Button>
              <PopUp   
                custom={
                  {
                    BtnIcon: EditIcon,
                    iconColor:colors.blueAccent[500],
                    formComponent: Edit,
                    userId: user.id,
                    btnColor: colors.greenAccent[500],variant:"text"
                  }
                }

              >
              </PopUp>

            </Box>
            <Box textAlign="center"  display={"inline"}>
              <Box textAlign="start" padding="10%">
                <Typography>
                  <Typography
                    variant="h4"
                    color={colors.greenAccent[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Full Name 
                  </Typography>
                  {user.full_name}
                </Typography>

                <Typography>
                  <Typography
                    variant="h4"
                    color={colors.greenAccent[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Role 
                  </Typography>
                  {user?.role?.name}
                </Typography>

                <Typography>
                  <Typography
                    variant="h4"
                    color={colors.greenAccent[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Email 
                  </Typography>
                  {user.email}
                </Typography>

                <Typography>
                  <Typography
                    variant="h4"
                    color={colors.greenAccent[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    User registration date 
                  </Typography>
                  {formatDate(user.created_at)}
                </Typography>

              </Box>
            </Box>

          </Box>

        </Grid>

      </Paper>
    </Grid>

  </Box>


);
};


export default  MyProfile
