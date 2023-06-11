import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Grid} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';

export default function PopUp(props) {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const  BtnIcon = props.custom.BtnIcon;
  const  btnVariant = props.custom.variant;
  const  btnColor =  props.custom.btncolor;
  const  iconColor = props.custom.iconColor;
  const  ContentComponent = props.custom.formComponent;

  return (
    <>

      <Grid container justifyContent="flex-end">
       <Button  onClick={handleClickOpen}  variant={btnVariant}  sx={{ backgroundColor:btnColor }}>
          <Typography color={iconColor}>
          <BtnIcon></BtnIcon>
        </Typography>
      </Button>
      </Grid>
           <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
         
          <ContentComponent custom={{...props.custom,closeModal:handleClose}}/>


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
