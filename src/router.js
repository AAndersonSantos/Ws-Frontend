import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/home'
import TabelaVeiculos from './pages/tabela-veiculos/tabelaVeiculos.js';

function Routers() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={ <Home /> }/>
          <Route exact path='/home' element={ <Home /> }/>
          <Route exact path='/tabela-de-veiculos' element={ <TabelaVeiculos /> }/>
        </Routes>
      </Router>
  );
}

export default Routers;