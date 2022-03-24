import React from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

function Home(){
    return(
        <>
            <Grid className="fonte" container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#000000" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button className="back" variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img className="img" src="https://mensageirosideral.blogfolha.uol.com.br/files/2016/05/capa-25genios-thumb.jpg" alt="" width="100px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;