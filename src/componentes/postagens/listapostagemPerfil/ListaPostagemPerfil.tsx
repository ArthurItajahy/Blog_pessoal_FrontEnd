import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagemPerfil.css';
import { busca, buscaId, post } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import { toast } from 'react-toastify';
import User from '../../../models/User';

function ListaPostagemPerfil() {
  const [posts, setPosts] = useState<Postagem[]>([])
  // Pega o ID guardado no Store
  const id = useSelector<UserState, UserState["id"]>(
    (state) => state.id
  );

  


  let history = useHistory();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )
  const [user, setUser] = useState<User>({
    id: +id,    // Faz uma conversão de String para Number
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
})
  // Métedo para pegar os dados de um Usuário especifico pelo ID
  async function findById(id: string) {
    buscaId(`/usuarios/${id}`, setUser, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  useEffect(() => {
    if (token == "") {
      toast.error('Você precisa estar logado', {
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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])

  var postagem = posts.map(post =>(
    <Box className="largura-perfil" m={5} >
    <Card className="back-listapostagem" variant="outlined">
      <CardContent >
        <Typography color="textSecondary" gutterBottom>
          Postagens
        </Typography>
        <Typography className="titulo-listagempostagem" variant="h5" component="h2">
          {post.titulo}
        </Typography>
        <Typography className="text-listagempostagem" variant="body2" component="p">
          {post.texto}
        </Typography>
        <Typography variant="body2" component="p">
          {post.tema?.descricao}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display="flex" justifyContent="center" mb={1.5}>

          <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
            <Box mx={1}>
              <Button variant="contained" className="marginLeft back-button" size='small' color="primary" >
                atualizar
              </Button>
            </Box>
          </Link>
          <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
            <Box mx={1}>
              <Button className='btnCancelar' variant="contained" size='small' color="secondary">
                deletar
              </Button>
            </Box>
          </Link>
        </Box>
      </CardActions>
    </Card>
  </Box>
  
  ))
    return (
    < >
      {postagem}
    </>
  )
}
export default ListaPostagemPerfil
