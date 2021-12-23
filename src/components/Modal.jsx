import * as React from 'react';
import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'

const style = {
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
  minHeight: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>

      <Item onClick={handleOpen}>{props.title}</Item>

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
          {/* <Container> */}
          <Box sx={style}>
            <img src={props.image} className='work-image' />
            <div className='modal-text'>
              <Typography id="transition-modal-title" variant="h7" component="h2" sx={{
                marginTop: '24px',
                textAlign: 'center'
              }}>
                {props.title}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {props.content}
              </Typography>
            </div>
          </Box>
          {/* </Container> */}
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal