import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
props.value,
)}%`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};



const UserImportProgress = () => {
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState([]);
  const [guid, setGuid] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001/cable");

    ws.onopen = () => {
      console.log("Connected to websocket server");
      setGuid("100");

      ws.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({
            id: guid,
            channel: "ImportUserChannel",
          }),
        })
      );
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      const message = data.message;
        
      if(typeof  message == 'object'){
        setProgress(message.progress)
      }
      console.log(message);
    };

    return () => {
      ws.close();
    };
  }, []); // Empty dependency array to ensure useEffect runs only once


  return (
     ( progress == 0 ?
        <></>
        :
        <Box sx={{ width: '80%' }} alignSelf="center">
          <Typography> User import Progress </Typography>
          <LinearProgressWithLabel value={progress} />
        </Box>
      )
    
  );
};

export default UserImportProgress;
