import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar className="back" position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography className="fonte" variant="h4" color="inherit">
                            Gênio Indomável
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/home'>
                                <Typography className="fonte" variant="h5" color="inherit">
                                    Home
                                </Typography>
                            </Link >
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/posts'>
                                <Typography className="fonte" variant="h5" color="inherit">
                                    Postagem
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/tema'>
                                <Typography className="fonte" variant="h5" color="inherit">
                                    Tema
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/cadastrar'>
                                <Typography className="fonte" variant="h5" color="inherit">
                                    Cadastrar
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/logar'>
                                <Typography className="fonte" variant="h5" color="inherit">
                                    Logout
                                </Typography>
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )

}
export default Navbar;

