import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../views/components/Header";
import { useDispatch } from "react-redux";
import {deleteUser, usersIndex} from "../../redux/users/actions"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import DeleteForever from "@mui/icons-material/DeleteForever";
import EditIcon from '@mui/icons-material/Edit';
import PopUp from "../components/PopUp";
import AddIcon from '@mui/icons-material/Add';
import  New  from "./New";
import  Edit  from "./Edit";



const UserDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const  dispatch = useDispatch()
  const {collection} = useSelector((state)=> state.usersReducer);


  const _deleteUserApi = (id) =>{
    dispatch(deleteUser(id,(res,err)=>{
      if(res){
        console.log(res)
      }
      if(err){
        console.log(err)
        return;
      }
    }))
  }



  useEffect(()=>{
    dispatch(usersIndex((res,err)=>{

      if(res){
        console.log(res)
      }
      if(err){
        console.log(err)
        return;
      }
    }))

  },[])
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "full_name",
      headerName: "Name",
      flex: 1,
      // cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex:1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex:1,
      renderCell: ({ row: { id } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >

            <Button type="button" onClick={()=> {_deleteUserApi(id)}}>
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
                  userId: id,
                  btnColor: colors.greenAccent[500],variant:"text"
                }
              }
                    
            >
            </PopUp>
          </Box>
        );
      },

    }
  ];

  return (
    <Box m="5%">
      <Header title="Users Dashboard" subtitle="Managing the users" />
      <Box
        m="40px 0 0 0"
        height="10%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[600],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[700],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[600],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[800]} !important`,
          },
        }}
      >
         <PopUp 
            custom={
                {
                  BtnIcon: AddIcon,
                  iconColor: colors.greenAccent[500],
                  formComponent: New,
                  btnColor: colors.greenAccent[500],variant:"contained"
                }
              }
          >
         </PopUp>

        <DataGrid  rows={collection} columns={columns} />
      </Box>
    </Box>

  );
};

export default UserDashboard;
