import React from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    return (
        <div id='contact'>
            <IconButton
                id='linkedin'
                className='contact-icon-link'
                size="large"
                href="https://www.linkedin.com/in/daniel-lenihan/"
                target="_blank"
                color="inherit"
                sx={{
                    transition: '.2s',
                    ':hover': {
                        bgcolor: 'rgba(10, 0, 37, 0.438)',
                        transform: 'scale(1.1)'
                    }
                }}
            >
                <LinkedInIcon sx={{ fontSize: '3rem' }}></LinkedInIcon>
            </IconButton>
            <IconButton
                id='github'
                className='contact-icon-link'
                size="large"
                href="https://github.com/drlenny"
                target="_blank"
                color="inherit"
                sx={{
                    transition: '.2s',
                    ':hover': {
                        bgcolor: 'rgba(10, 0, 37, 0.438)',
                        transform: 'scale(1.1)'
                    }
                }}
            >
                <GitHubIcon sx={{ fontSize: '3rem' }}></GitHubIcon>
            </IconButton>
            <IconButton
                id='email'
                className='contact-icon-link'
                size="large"
                href="mailto:lenihand22@gmail.com"
                target="_blank"
                color="inherit"
                sx={{
                    transition: '.2s',
                    ':hover': {
                        bgcolor: 'rgba(10, 0, 37, 0.438)',
                        transform: 'scale(1.1)'
                    }
                }}
            >
                <EmailIcon sx={{ fontSize: '3rem' }}></EmailIcon>
            </IconButton>
        </div>
    );
}

export default Contact;