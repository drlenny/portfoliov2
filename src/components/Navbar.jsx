import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Resume from '../media/lenihanResume.pdf';

// may end up not needing or wanting this scroll part
function ScrollTop(props) {

  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const pages = ['portfolio', 'contact', 'resume']

function Navbar(props) {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  };

  const handleCloseMenu = (event) => {
    setAnchorElNav(null)
  };

  // setting attributes specifically to the resume link
  useEffect(() => {
    document.querySelectorAll('.resume-link').forEach(function (link) {
      link.setAttribute('target', '_blank');
      link.setAttribute('href', Resume)
    })
  }, [anchorElNav])

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        className='appbar'
      >
        <Toolbar
          disableGutters
          className='navbar'
        >

          {/* logo */}
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontVariant: 'small-caps'
            }}
            className='logo'
          >
            Daniel Lenihan
          </Typography>

          {/* navigation */}
          <Box
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {pages.map((page) => (
              <a key={page} href={`#${page}`} className={`nav-link ${page}-link`}>
                <Button
                  key={page}
                  variant="h5"
                  component="div"
                  sx={{
                    mr: 4,
                    my: 2,
                    fontVariant: 'small-caps',
                    textTransform: 'none',
                    display: 'block',
                    fontSize: '1.4rem',
                    transition: '.2s',
                    ':hover': {
                      bgcolor: 'rgba(10, 0, 37, 0.438)',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  {`${page.charAt(0).toUpperCase() + page.slice(1)}`}
                </Button>
              </a>
            ))}
          </Box>

          {/* responsive navigation menu box */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' }
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
              sx={{
                my: 2,
                mr: '32px',
                transition: '.2s',
                ':hover': {
                  bgcolor: 'rgba(10, 0, 37, 0.438)',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <MenuIcon sx={{ fontSize: '2.5rem' }} />
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
              onClose={handleCloseMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu} fontSize='large'>
                  <a href={`#${page}`} className={`menu-nav-link ${page}-link`}>
                    <Typography textAlign='center' sx={{ fontSize: '1.2rem', lineHeight: 2 }}>
                      {`${page.charAt(0).toUpperCase() + page.slice(1)}`}
                    </Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>

      {/* scroll to top button */}
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab
          size="large"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: 'rgb(0, 119, 255)'
          }}
        >
          <KeyboardArrowUpIcon sx={{ fontSize: '2rem' }} />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default Navbar;
