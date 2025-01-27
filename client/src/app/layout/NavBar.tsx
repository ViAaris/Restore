import { AppBar, ToggleButton, Toolbar, Typography } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

type Props = {
  darkmodeFromParent: boolean;
  changeMode: () => void;
}

export default function NavBar({darkmodeFromParent, changeMode}: Props) {


 const darkMode = darkmodeFromParent;

  return (
    <AppBar position="fixed">
        <Toolbar>
        <ToggleButton
                value={true}
                selected={darkMode}
                onClick={changeMode}> 
                {darkMode ? <DarkModeIcon/> : <LightModeIcon  sx={{color: "yellow"}}/>}
            </ToggleButton>
            <Typography variant="h6">RE-STORE</Typography>
        </Toolbar>
        </AppBar>
  )
}