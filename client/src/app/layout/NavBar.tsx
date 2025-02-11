import { AppBar, Badge, Box, IconButton, List, ListItem, ToggleButton, Toolbar, Typography } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { NavLink } from "react-router";
import { ShoppingCart } from "@mui/icons-material";

const navStyles = {color: 'inherit',
  typography: 'h6',
  textDecoration: 'none',
  '&:hover': {
    color: 'grey.500'
  },
  '&.active': {
    color: '#baecf9'
  }
};

const midLinks = [
  {title: 'catalog', path:'/catalog'},
  {title: 'about', path:'/about'},
  {title: 'contact', path:'/contact'},
];

const rightLinks = [
  {title: 'login', path:'/login'},
  {title: 'register', path:'/register'},
]


type Props = {
  darkmodeFromParent: boolean;
  changeMode: () => void;
}

export default function NavBar({darkmodeFromParent, changeMode}: Props) {


 const darkMode = darkmodeFromParent;

  return (
    <AppBar position="fixed">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Typography component={NavLink} sx={navStyles} to='/' variant="h6">RE-STORE</Typography>
              <ToggleButton
                    value={true}
                    selected={darkMode}
                    onClick={changeMode}> 
                    {darkMode ? <DarkModeIcon/> : <LightModeIcon  sx={{color: "yellow"}}/>}
              </ToggleButton>    
          </Box>
        
          <List sx={{display:'flex'}}>
              {midLinks.map(({title, path}) => (
              <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={navStyles}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>  

          <Box sx={{display: 'flex', alignItems: 'center'}}>
             <IconButton size="large" sx={{color:'inherit'}}>
              <Badge badgeContent='4' color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>


             <List sx={{display:'flex'}}>
                  {rightLinks.map(({title, path}) => (
                    <ListItem
                      component={NavLink}
                      to={path}
                      key={path}
                      sx={navStyles}
                      >
                        {title.toUpperCase()}
                  </ListItem>
                ))}
            </List>
          </Box>
           
        </Toolbar>
        </AppBar>
  )
}