import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import './Navbar.css';


function Navbar() {

    return (
        <>
            <AppBar className="back-navbar" position="static">
                <Toolbar >
                    <Box >
                        <Typography className="fonte-title" variant="h4" color="inherit">
                            Gênio Indomável
                        </Typography>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )

}
export default Navbar;

