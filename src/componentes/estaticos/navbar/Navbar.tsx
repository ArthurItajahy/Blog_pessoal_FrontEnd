import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
             <AppBar className="back" position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography className="fonte"variant="h4" color="inherit">
                            Gênio Indomável
                        </Typography>
                    </Box>

                    <Box  display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography className="fonte" variant="h5" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography className="fonte"  variant="h5" color="inherit">
                                Postagem
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography className="fonte"  variant="h5" color="inherit">
                                Tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography className="fonte" variant="h5" color="inherit">
                                Cadastrar
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Link to='/login'>
                            <Typography className="fonte"  variant="h5" color="inherit">
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

