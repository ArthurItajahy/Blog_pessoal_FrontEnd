
import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useHistory, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import AddIcon from '@material-ui/icons/Add';
import './CadastroTema.css';

function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/logar")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            if (id !== undefined) {
                try{
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso');
            }catch(error){
                alert('Error!! Ao atualizar.')
            }
            } else {
                try{
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema cadastrado com sucesso');
            }catch{
                alert('Error!! ao cadastrar tema.')
            }
            }
            back()
    
        }
    
        function back() {
            history.push('/home')
        }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form className="form-principal-cadastrar" onSubmit={onSubmit}>
                <Typography className="title-cadastro-tema"  variant="h3"  component="h1" align="center" >CRIAR NOVO TEMA</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="Tema" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button  className="btnModal" type="submit" variant="contained" color="primary">
                 Criar<AddIcon className='icon-model'/>
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;