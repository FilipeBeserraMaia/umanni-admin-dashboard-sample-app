import {Box, IconButton, useTheme} from "@mui/material"
import { useContext } from "react";
import { ColorModeContext,tokens } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ThemeButton from "../ThemeButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import React from "react"
import {Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlined from "@mui/icons-material/PersonOutlined";
import MyProfile from "../../my_profile";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/session/actions";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const history = useNavigate(); 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const logoutApp = () => {

    dispatch(logout((res,err)=>{
      if(res){
        console.log(res)
      }
      if(err){
        console.log(err)
        return;
      }
    }))

  }

  const navigateToMyProfile = ()=>{
    history('/my_profile')
  }

  const callAction = (action) => {

    return () =>{
      action()
      handleCloseUserMenu();
    }
  }



  return (
    <Box 
      display="flex"
      justifyContent="space-between"
      p={2}  
      sx={{
        borderBottom:2,
        borderColor:colors.primary[400],
        backgroundColor:colors.primary[600]
      }}
    >

      <Box mb="3px" diplay="flex" borderRadius="3px">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          App
        </Typography>
      </Box>


      {/* ICONS */}
      <Box display="flex">
        <ThemeButton/>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <SettingsOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Menu  sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem key={"logout"} onClick={callAction(logoutApp)}>
            <Typography textAlign="center" sx={{pr:5}}> Logout </Typography>
            <LogoutIcon/>
          </MenuItem>
          <MenuItem key={"my_profile"} onClick={callAction(navigateToMyProfile)}>
            <Typography sx={{pr:3}} >My Profile
            </Typography>
            <PersonOutlinedIcon/>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
