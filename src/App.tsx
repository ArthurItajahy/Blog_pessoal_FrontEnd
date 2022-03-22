import React from 'react';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import './App.css';
import Home from './paginas/home/Home';

//let nome = 'Arthur'

function App() {
  return (
    <>
      <Navbar />
        <Home />
      <Footer />
    </>
  )

}
export default App;
