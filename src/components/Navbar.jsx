import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
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
    document.getElementById('resume-link').setAttribute('target', '_blank');
    document.getElementById('resume-link').setAttribute('href', Resume)
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar>
        <Toolbar>

          {/* logo */}
          <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, fontVariant: 'small-caps' }}>
            Daniel Lenihan
          </Typography>

          {/* navigation */}
          {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <a href='#portfolio' className='nav-link'>
              <Typography variant="h6" component="div" sx={{ mr: 4, fontVariant: 'small-caps' }}>
                Portfolio
              </Typography>
            </a>
            <a href={Resume} target='_blank' className='nav-link'>
              <Typography variant="h6" component="div" sx={{ mr: 4 }}>
                Resume
              </Typography>
            </a>
            <a href='#contact' className='nav-link'>
              <Typography variant="h6" component="div" sx={{ mr: 4 }}>
                Contact
              </Typography>
            </a>
          </Box> */}

          {/* navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <a href={`#${page}`} className='nav-link' id={`${page}-link`}>
                <Typography key={page} variant="h6" component="div" sx={{ mr: 4, fontVariant: 'small-caps' }}>
                  {`${page.charAt(0).toUpperCase() + page.slice(1)}`}
                </Typography>
              </a>
            ))}
          </Box>

        </Toolbar>
      </AppBar>

      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default Navbar;
