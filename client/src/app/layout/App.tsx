import { useEffect, useState } from "react"
import { Product } from "../models/product";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Catalog from "../../features/catalog/Catalog";
import {Box, Container, createTheme, CssBaseline, ThemeProvider, ToggleButton} from "@mui/material";
import NavBar from "./NavBar";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [darkMode, setDarkMode] = useState<boolean>(true);

  const palleteType = darkMode ? 'dark' : 'light';

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

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
          
            <Catalog products={products}/>
          </Container> 
        </Box>

      </ThemeProvider>

  )
}

export default App
