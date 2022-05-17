import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Outlet } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];

//for test
const Adminheader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
    <AppBar position="static" sx={{ backgroundColor:'#B2E7E8' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            noWrap
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Back to site
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Back to site</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, mr: 1 , color: 'black', display: 'block', backgroundColor:'#304D63' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ color: 'black' }}>
                Store management pannel
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet/>
    </div>
  );
};
export default Adminheader;
