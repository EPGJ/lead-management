import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#272727',
    },
  },
});


export default function Nav() {

  const navigate = useNavigate();



  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=> navigate('/leads')}>
              Elogroup
            </Typography>
            <Button color="inherit" onClick={()=> navigate('/signUp')} >Register</Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
