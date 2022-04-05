import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button,Box } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import './ModalPerfil.css';
import AddIcon from '@material-ui/icons/Add';
import AtualizarPerfil from '../atualizarP/AtualizarPerfil';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: '#fafafa',
      borderRadius:'1%',
      boxShadow: theme.shadows[9],
      padding: theme.spacing(1, 1, 1),
    },
  }),
);

function ModalPerfil () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose}/>
      
      </Box>
      
      <AtualizarPerfil/>
      
    </div>
  );

  return (
    <div>
      <Button
        variant="outlined"
        className="btnModal"
        onClick={handleOpen}><AddIcon className='icon-model'/>Atualizar Perfil</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalPerfil