import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import './App.css';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';



//let nome = 'Arthur'

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <div style={{minHeight: '100vh'}}>

            <Route exact path='/'>
              <Login/>
            </Route>

            <Route path='/logar'>
              <Login />
            </Route>

          <Route path='/home'>
            <Home />
          </Route> 
          <Route path='/cadastrar'>
            <CadastroUsuario/>
          </Route> 
          </div>
        </Switch>  
        <Footer />
      </Router>  
  );

}
export default App;
