import React from "react";
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ModalCadastrarVeiculo from "../modal/modalCadastrarVeiculo"
import ModalCadastrarModelo from "../modal/modalCadastrarModelo"
import ModalCadastrarMarca from "../modal/modalCadastrarMarca"

import "./styles/styleNavBar.scss"

function NavbarComponent(){

    let navigate = useNavigate()

    function tabelaVeiculos(e) {
        e.preventDefault()
        navigate(`/tabela-de-veiculos`)
      }

      function home(e) {
        e.preventDefault()
        navigate(`/home`)
      }

    return (   
        <Navbar bg="primary">
            <Container>
                <Nav className="me-auto">
                    <Button variant="outline-primary" onClick={home}><span>Home</span></Button>
                    <Button variant="outline-primary" onClick={tabelaVeiculos}><span>Tabela De Veículos</span></Button>
                    <ModalCadastrarVeiculo/>
                    <ModalCadastrarModelo/>
                    <ModalCadastrarMarca/>
                </Nav>
            </Container>
      </Navbar>
    );
}

export default NavbarComponent;