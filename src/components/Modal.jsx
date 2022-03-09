import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

function TransitionsModal(props) {

  const boxStyle = {
    display: 'flex',
    flexWrap: {
      sm: 'wrap',
      md: 'nowrap'
    },
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    minHeight: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '50px'
  };

  const cardStyle = {
    // padding: '100px 16px',
    // maxWidth: '345px',
    height: {
      xs: '50vw',
      md: '35vw',
      lg: '25vw'
    },
    width: {
      xs: '50vw',
      md: '35vw',
      lg: '25vw'
    },
    textAlign: 'center',
    margin: 'auto',
    backgroundColor: `${props.color}`,
    borderRadius: '40px',
    transition: '.2s',
    ':hover': {
      transform: 'scale(1.1)'
    }
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="zoom"></div>
      <Card
        onClick={handleOpen}
        sx={cardStyle}
        className='portfolio-card'
      >
        <img className='project-icon' src={`${props.icon}`} alt={props.alt} />
      </Card>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Fade in={open}>
          <Container>
            <Box sx={boxStyle}>
              <div className='modal-content'>
                <img src={props.image} className='work-image' alt={props.alt} />
                <div className='modal-text'>
                  <Typography id="transition-modal-title" variant="h7" component="h2" sx={{ margin: '30px', textAlign: 'center' }}>
                    {props.title}
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    {props.content}
                  </Typography>
                  <div className='modal-buttons'>
                    <Button size='large' variant='contained' href={props.link} target="_blank" sx={{ mr: '30px' }}>Link</Button>
                    <Button size='large' variant='contained' href={props.code} target="_blank" sx={{ ml: '30px' }}>Code</Button>
                  </div>
                </div>
              </div>
            </Box>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal