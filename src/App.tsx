
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './componentes/temas/listatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastrarPost from './componentes/postagens/cadastrarPost/CadastrarPost';
import CadastroTema from './componentes/temas/cadastrarTema/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import NavbarPri from './componentes/estaticos/navbar/NavbarPri';



//let nome = 'Arthur'

function App() {
  return (
    <Router>

      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Navbar />
            <Login />
          </Route>

          <Route path='/logar'>
          <Navbar />
            <Login />
          </Route>

          <Route path='/home'>
            <NavbarPri />
            <Home />
          </Route>
          <Route path='/cadastrar'>
          <Navbar />
            <CadastroUsuario />
          </Route>
          <Route path='/tema'>
            <NavbarPri />
            <ListaTema />
          </Route>
          <Route path='/posts'>
            <NavbarPri />
            <ListaPostagem />
          </Route>

          <Route exact path='/formularioPostagem'>
            <NavbarPri />
            <CadastrarPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <NavbarPri />
            <CadastrarPost />
          </Route>
          <Route exact path='/formularioTema'>
            <NavbarPri />
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <NavbarPri />
            <CadastroTema />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <NavbarPri />
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <NavbarPri />
            <DeletarTema />
          </Route>

        </div>
      </Switch>
      <Footer />
    </Router>
  );

}
export default App;
