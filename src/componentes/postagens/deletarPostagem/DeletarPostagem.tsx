import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';

import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';

function DeletarPostagem() {
  let history = useHistory();
    const { id } = useParams<{id: string}>();
    const token = useSelector<UserState, UserState["tokens"]>(
      (state) => state.tokens
    ) 
  
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/postagens/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          try{
            history.push('/posts')
            deleteId(`/postagens/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            alert('Postagem deletada com sucesso');
          }catch(error){
            alert('Error!A o deletar.')
          }
          }
        
          function nao() {
            history.push('/posts')
          }
  return (
    <>
      <Box  className="largura" m={2}>
        <Card className="back-listapostagem" variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography className="titulo-listagempostagem" color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography className="text-listagempostagem" color="textSecondary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft back-button" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button className="btnCancelar"  onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;