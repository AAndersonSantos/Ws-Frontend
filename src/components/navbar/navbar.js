import React from "react";
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Modal from "../modal/modal"
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
                    <Modal/>
                </Nav>
            </Container>
      </Navbar>
    );
}

export default NavbarComponent;