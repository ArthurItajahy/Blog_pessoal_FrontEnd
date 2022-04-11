import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

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

