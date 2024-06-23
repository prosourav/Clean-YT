import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import { pages } from '../../config';
import { Link as RouterLink } from 'react-router-dom';


export default function ButtonAppBar() {
  // const toggleTheme = useStoreActions(((actions) => actions.theme.toggleTheme));

  // const handleTheme = () => {
  //   toggleTheme();
  // };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(255,0,0)", position:'fixed', top:'0', zIndex:'100' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: "none" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} >
            <Link to='/' component={RouterLink} sx={{ textDecoration: 'none', zIndex:'1000', color:'#fff' }}>
              Clean Youtube
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((item) => (
              <Link component={RouterLink} to={`/${item.toLowerCase()}`} key={item} sx={{ color: '#fff', margin: '0px 12px', padding: '2px 10px', textDecoration: 'none', cursor: 'pointer' }}>
                {item}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
