
import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { buscaId, put } from '../../../services/Service';
import { useHistory } from 'react-router-dom';
import './AtualizarPerfil.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/keysRedux';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import User from '../../../models/User';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/action';

function AtualizarPerfil() {

    let history = useHistory()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    const dispatch = useDispatch();
    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
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
    function updatedUser(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (id !== undefined) {
            try {
                await put(`/usuarios/atualizar`, user, setUser, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('Usuario atualizado com sucesso.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                dispatch(addToken(''))
                backlogar()
            } catch (error) {

                toast.error('Error!! Ao Atualizar.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
                backperfil()
            }
        }
    }
    function backlogar() {
        history.push('/logar')

    }
    function backperfil() {
        history.push('/perfil')

    }

    return (
        <Container maxWidth="sm" className="topo">
            <form className="form-principal-cadastrar" onSubmit={onSubmit}>
                <Typography className="title-cadastro-tema" variant="h3" component="h1" align="center" >Atualizar Foto</Typography>
                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUser(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUser(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth />
                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUser(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" fullWidth />
                <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUser(e)} id="foto" label="link foto" variant="outlined" name="foto" margin="normal" fullWidth />
                <Button className="btnModal" type="submit" variant="contained" color="primary">
                    Atualizar<BorderColorIcon className='icon-model' />
                </Button>
            </form>
        </Container>
    )
}

export default AtualizarPerfil;