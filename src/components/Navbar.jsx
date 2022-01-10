import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

import Resume from '../media/lenihanResume.pdf';

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



function Navbar(props) {

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Daniel Lenihan
          </Typography>

          <a href='#portfolio' className='nav-link'>
            <Typography variant="h6" component="div" sx={{ mr: 4 }}>
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
