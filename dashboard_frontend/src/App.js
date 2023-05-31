

import { ColorModeContext,useMode } from "./theme";
import {CssBaseline,ThemeProvider} from  "@mui/material";
import  Topbar from './views/components/global/Topbar'; 
import  Sidebar  from "./views/components/global/Sidebar";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Login from "./views/components/Login";
import SignUp from "./views/components/SignUp";
function App() {
  const [theme,colorMode] = useMode();

  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          { true ? undefined : <Sidebar/> }
          <main className="content">
            {  true ? undefined   : <Topbar/>}
            <Routes> 
              <Route path='/' element={<Dashboard/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/sign_up' element={<SignUp/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
