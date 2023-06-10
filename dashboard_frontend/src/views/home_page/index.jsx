import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../views/components/Header";
import { Grid, Paper,Typography } from "@mui/material";


const HomePage = () => {
  const theme = useTheme();
  
  return (
    <Box m="5%">
      <Header title="Home" subtitle="Application home page" />
        <Box 
          display="flex"
          justifyContent="space-between"
        >
        </Box>
        <Grid align='center'>
          <h1> Wellcome! </h1>
        </Grid>

    </Box>

  );
};


export default HomePage
