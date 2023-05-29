
import { ColorModeContext,useMode } from "./theme";
import {CssBaseline,ThemeProvider} from  "@mui/material";
import  Topbar from './views/components/global/Topbar'; 
import  Sidebar  from "./views/components/global/Sidebar";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./views/dashboard";
function App() {
    const [theme,colorMode] = useMode();
  
  return(
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
            <Sidebar/>
            <main className="content">
               <Topbar/>
               <Routes> 
                <Route path='/' element={<Dashboard/>} />
               </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
