

import { ColorModeContext,useMode } from "./theme";
import {CssBaseline,ThemeProvider} from  "@mui/material";
import  Topbar from './views/components/global/Topbar'; 
import  Sidebar  from "./views/components/global/Sidebar";
import RequireLogin from  "./views/components/helpers/RequireLogin";
import Router from "./views/components/helpers/Router"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme,colorMode] = useMode();
  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
         <RequireLogin Component={Sidebar} />
          <main className="content">
            <RequireLogin Component={Topbar} />
            <Router/>
          </main>
          <ToastContainer />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
