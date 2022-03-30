import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, ButtonGroup, Grid } from '@mui/material';

import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar className="back-navbar" position="static">
                <Grid item xs={12} justifyContent='end'>
                    <Grid item xs={6}>
                        <Typography className="fonte-title" variant="h4" color="inherit">
                            Gênio Indomável
                        </Typography>
                    </Grid>
                    <Grid item xs={6} >
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
                            <Link className='text-decorator-none' to='/cadastrar'>
                                <Typography className='font-linkNavbar' variant="h5" >
                                    Cadastrar
                                </Typography>
                            </Link>
                        </Button>
                        <Button>
                            <Link className='text-decorator-none' to='/logar'>
                                <Typography className='font-linkNavbar' variant="h5" >
                                    Logout
                                </Typography>
                            </Link>
                        </Button>
                    </Grid>
                </Grid>


            </AppBar>
        </>
    )

}
export default Navbar;

