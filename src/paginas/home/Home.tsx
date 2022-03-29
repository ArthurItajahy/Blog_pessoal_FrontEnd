import React from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import TabPostagem from "../../componentes/postagens/tabpostagens/TabPostagem";

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
                    <img className="img" src="https://64.media.tumblr.com/71c46337ebcd4bc2ac41fda76af4aad4/tumblr_ouo8yb59lG1s32c21o1_r2_500.gifv" alt="" width="50px" height="200px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;