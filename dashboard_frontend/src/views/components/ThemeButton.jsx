import React from "react";
import { ColorModeContext } from "../../theme";
import { IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import { useTheme } from "@emotion/react";


const ThemeButton = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? (
        <DarkModeOutlinedIcon />
      ) : (
          <LightModeOutlinedIcon />
        )}
    </IconButton>
  )

}


export default ThemeButton;
