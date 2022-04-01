import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import './Navbar.css';


function NavbarPri() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout() {
        setToken('')
        alert("Usuario deslogado")
        history.push('/logar')
    }

    return (
        <>
            <AppBar className="back-navbar" position="static">
                <Toolbar className="end-navbar">
                    <Button >
                        <Link className='text-decorator-none ' to='/home'>
                            <Typography className='font-linkNavbar' variant="h5">
                                Home
                            </Typography>
                        </Link >
                    </Button>
                    <Button>
                        <Link className='text-decorator-none' to='/posts'>
                            <Typography className='font-linkNavbar' variant="h5" >
                                Postagem
                            </Typography>
                        </Link>
                    </Button>
                    <Button><Link className='text-decorator-none' to='/tema'>
                        <Typography className='font-linkNavbar' variant="h5" >
                            Tema
                        </Typography>
                    </Link>

                    </Button>
                    <Button>
                        <Link className='text-decorator-none' to='/formularioTema'>
                            <Typography className='font-linkNavbar' variant="h5" >
                                Cadastrar Tema
                            </Typography>
                        </Link>
                    </Button>
                    <Button>
                        <Box className='text-decorator-none' onClick={goLogout}>
                            <Typography className='font-linkNavbar' variant="h5" >
                                Logout
                            </Typography>
                        </Box>
                    </Button>

                </Toolbar>
            </AppBar>
        </>
    )

}
export default NavbarPri;

