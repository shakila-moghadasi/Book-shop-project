import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Tab , Tabs , AppBar, Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Link, Outlet } from 'react-router-dom';

const pages = ['Commodity', 'PriceandInventory', 'ordered'];
const routes = ["/managecommodity", "/manageprice" , "/ordered" , "/"];

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
        <Button
            noWrap
            value={routes[3]}
            label="Ordered"
            component={Link}
            to={routes[3]}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Back to site
          </Button>
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
              {pages.map((page , index) => (
                <MenuItem 
                  key={page} 
                  onClick={handleCloseNavMenu}
                  value={routes[index]}
                  component={Link}
                  to={routes[index]}
                  >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem 
                onClick={handleCloseNavMenu}
                value={routes[3]}
                component={Link}
                to={routes[3]}
                >
                  <Typography textAlign="center">Back to site</Typography>
              </MenuItem>
            </Menu>
          </Box>
        <Tabs sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Tab
            value={routes[0]}
            label="Commodity"
            component={Link}
            to={routes[0]}
          />
          <Tab
            value={routes[1]}
            label="PriceandInventory"
            component={Link}
            to={routes[1]}
          />
          <Tab
            value={routes[2]}
            label="Ordered"
            component={Link}
            to={routes[2]}
          />
        </Tabs>
        

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
