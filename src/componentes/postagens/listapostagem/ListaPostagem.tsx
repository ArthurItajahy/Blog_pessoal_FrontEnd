import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, makeStyles, createStyles, Avatar, Theme } from '@material-ui/core';
import './ListaPostagem.css';
import { busca } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import { toast } from 'react-toastify';
const useStyles1 = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
    }),
);
function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const classes = useStyles1();

  let history = useHistory();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )


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
  return (
    < >
      {
        posts.map(post => (
          <Box className="largura" m={0} >
            <Card className="back-listapostagem" variant="outlined">
              <CardContent >
                <div className={classes.root}>
                  <Avatar alt="Perfil" src={post.usuario?.foto} />
                </div>
                <Typography color="textSecondary" gutterBottom>
                  {post.usuario?.nome}
                </Typography>
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
      }
    </>
  )
}
export default ListaPostagem;