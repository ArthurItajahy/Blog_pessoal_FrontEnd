import React, { useState, useEffect, ChangeEvent } from 'react';

import { Grid, Box, Typography, TextField, Button, InputAdornment } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { AccountCircle } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';

import './Login.css';


function Login() {
    let history = useHistory();
    const dispatch = useDispatch();

    const [token, setToken] = useState(''); // Criando configuração para usa o redux
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
    }

    return (
        <Grid className='back-grid' container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField className='editborder' InputProps={{startAdornment: (<InputAdornment position="start"><AccountCircle /></InputAdornment>), }} value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        
                        <Box marginTop={2} textAlign='center'>
                            <Button className='back' type='submit' variant='outlined'>
                                Logar
                            </Button>

                        </Box>
                    </form>
       
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography className='font-style' variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link className='text-decorator-none' to='/cadastrar'>
                            <Typography  className='font-link' variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} className='img-principal'></Grid>
        </Grid>
    );

}

export default Login;