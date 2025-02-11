
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import NavBar from "./NavBar";
import { useState } from "react";
import { Outlet } from "react-router";


function App() {

  const [darkMode, setDarkMode] = useState<boolean>(true);

  const palleteType = darkMode ? 'dark' : 'light';



  const changeMode = () => {
    setDarkMode((prevSelected) => !prevSelected);
  };

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType == 'light' ) ? '#eaeaea' : '#121212'
      } 
    }
  })

  return (

      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar darkmodeFromParent={darkMode} changeMode={changeMode}/>
      
        <Box sx={{minHeight: '100vh',
          background: darkMode ? 
          'radial-gradient(circle, #1e3aBa, #111B27)' :  'radial-gradient(circle, #baecf9, #f0f9ff)',
          py:6
          }}>
           
          <Container maxWidth='xl' sx={{mt:8}}>
          
            <Outlet/>
          </Container> 
        </Box>

      </ThemeProvider>

  )
}

export default App
