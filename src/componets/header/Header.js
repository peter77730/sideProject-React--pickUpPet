import * as React from 'react';
import { useState } from 'react';
import Logo from '../../images/logo.png'
import { makeStyles } from '@material-ui/styles';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  {title:'首頁',
  id:'mainPage',
 },
 {title:'服務介紹',
 id:'serviceIntro',
},
{title:'設計作品',
id:'setSide',
},
{title:'領養專區',
id:'goodPet',
},
{title:'毛孩似顏繪',
id:'petPanit',
}]

// const pages = ['首頁', '服務介紹', '設計作品','領養專區','毛孩似顏繪'];

const useStyles = makeStyles({
    bgWhite:{
        backgroundColor:'white',
        boxShadow:'none',
        },
    bgBlack:{
        color:'black',
        backgroundColor:'white',
    },
    petPanit:{
      color:'white',
      backgroundColor:'black',
      fontSize:'100px',
    },
  });

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: '#F9C745',
      boxShadow: 'none',
      borderRadius:'25px',
    },
  });


const Header = () => {
    const classes = useStyles();
    
    const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ boxShadow: 'none' }} position="static">
      <Container className={classes.bgWhite} maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 4, display: { xs: 'flex', md: 'flex' } }}
          >
            <img src={Logo} alt="撿到寶" />
          </Typography>


          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className={classes.bgBlack} />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <BootstrapButton className={classes[page.id]}
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'black', display: 'block',fontSize:'16px'}}
              >
                {page.title}
              </BootstrapButton>
            ))}
          </Box>
          <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem  className={classes[page.id]} key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header
