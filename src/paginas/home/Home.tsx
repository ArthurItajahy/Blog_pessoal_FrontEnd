import React, { useEffect} from "react";
import {Typography, Box, Grid, Button} from '@material-ui/core';
import TabPostagem from "../../componentes/postagens/tabpostagens/TabPostagem";
import { Link, useHistory } from "react-router-dom";
import { UserState } from "../../store/tokens/keysRedux";
import { useSelector } from "react-redux";

import './Home.css';

function Home(){
    let history = useHistory();
    const token = useSelector<UserState,UserState["tokens"]>(
        (state) => state.tokens
    ) 
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history.push("/logar")
  
      }
  }, [token])
    return(
        <>
            <Grid className="fonte back-home" container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className="title-princial-home">Thinking, No talk!</Typography>
                        <Typography variant="h5" gutterBottom  component="h5" align="center" className="text-princpal-home" >Um lugar focado em reunir pessoas para resolver problemas...</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Link to="/posts" className="text-decorator-none">
                            <Button className="back-button-postsee" variant="outlined" >Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} className="img-genios"  >
                </Grid>
                <Grid xs={12} className='postagens back-postagem'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;