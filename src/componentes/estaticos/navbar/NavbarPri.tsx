import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, ButtonGroup, Grid, TextField } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu';

import SearchIcon from '@material-ui/icons/Search';
import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core';

import './Navbar.css';

const useStyles1 = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
    }),
);
function ImageAvatars() {
    const classes = useStyles1();

    return (
        <div className={classes.root}>
            <Avatar alt="Perfil" src='https://socientifica.com.br/wp-content/uploads/2017/03/albert-einstein-scaled.jpg' />
        </div>
    );
}

function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    function goLogout() {
        setToken('')
        alert("Usuario deslogado")
        history.push('/logar')
    }

    return (
        <>
            <Button className='text-decorator-none font-linkNavbar ' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link className='text-decorator-none' to='/posts'>
                    <Typography className='font-menu-navbar icon-nav' variant="h5" >
                        Postagem
                    </Typography>
                </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className='text-decorator-none' to='/tema'>
                        <Typography className='font-menu-navbar icon-nav' variant="h5" >
                            Tema
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link className='text-decorator-none' to='/formularioTema'>
                        <Typography className='font-menu-navbar icon-nav' variant="h5" >
                            Cadastrar Tema
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>

                    <Typography className='font-menu-navbar icon-nav text-decorator-none' onClick={goLogout} variant="h5" >
                        Sair
                    </Typography>

                </MenuItem>
               
            </Menu>
        </>
    );
}
function NavbarPri() {



    return (
        <>
            <AppBar className="back-navbar" position="static">
                <Toolbar className="end-navbar">
                 
                    <Button className='button-home-nav' >
                        <Link className='text-decorator-none ' to='/home'>

                            <Typography className='font-linkNavbar ' variant="h5">
                                <HomeIcon className="icon-nav" />
                            </Typography>
                        </Link >
                        
                    </Button>
                    <ImageAvatars />
                    <SimpleMenu />
                 
                </Toolbar>
            </AppBar>
        </>
    )

}
export default NavbarPri;

