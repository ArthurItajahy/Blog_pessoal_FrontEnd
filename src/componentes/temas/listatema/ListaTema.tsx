import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import { toast } from 'react-toastify';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  ) 

  let history = useHistory();

  useEffect(()=>{
    if(token == ''){
      toast.error('Você precisa estar logado.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
      history.push("/logar")
    }
  }, [token])


  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTema()
  }, [temas.length])


  return (
    <>
    {
      temas.map(tema =>(
      <Box className="largura" m={0} >
        <Card  className="back-listapostagem" variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography  className="titulo-listagempostagem" variant="h5" component="h2">
             {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft back-button" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button className="btnCancelar"variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;