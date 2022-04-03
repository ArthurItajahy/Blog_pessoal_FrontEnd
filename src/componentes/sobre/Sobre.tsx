import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import './Sobre.css'

function Sobre() {
  return (
    <>
        <Grid className="fonte back-sobre" container direction="row" justifyContent="center" alignItems="center">
                <Grid xs={8} >
                <Box paddingX={20}  >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className="title-princial-sobre">Ola! Meu nome Arthur.</Typography>
                        <Typography variant="h5" gutterBottom  component="h5" align="left" className="text-princpalsobre" > Eu sou Desenvolvedor Java, acredito que a genialidade não está no talento e sim na persistência para pode construi-la. Aprendi programação sozinho por isso tenho capacidade de resolver problemas sem precisar de um caminho definido e acabo construindo esse caminho por conta própria. Estou buscando minha primeira experiência como desenvolvedor, pois sei que minha vocação é ajudar o mundo, mas primeiro quero ajudar a sua empresa. </Typography>
                </Box>
                </Grid>
                <Grid xs={4}className="img-sobre">
                </Grid>
        </Grid>
    </>
  )
}

export default Sobre