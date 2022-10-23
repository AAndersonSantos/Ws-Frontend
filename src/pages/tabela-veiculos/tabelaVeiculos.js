import React, {useState, useEffect} from "react"
import axios from 'axios';
import Navbar from "../../components/navbar/navbar"
import { Table } from 'react-bootstrap';
import "./styles/styleTabelaVeiculos.scss"

function VeiculosLista(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {  
        axios.get("http://localhost:8080/api/carro").then((res) => {
            setPosts(res.data)
            console.log(res);       
        }).catch((err) => {
            console.log(err.response)
        })
            
    }, [])

    function renderTable() {
        return (
            <Table striped bordered hover size="sm" className="table-veiculos-titluos">
            <thead>
                <tr>
                    <th>ID / Marca</th>
                    <th>ID / Modelo</th>
                    <th>Ano</th>
                    <th>Combustível</th>
                    <th>Número de portas</th>
                    <th>Cor</th>
                    <th>Valor fipe</th>
                    <th>Data de cadastro</th>
                </tr>
            </thead>
            <tbody>
                 {renderRows()}
            </tbody>
        </Table>
        )
    }

    function renderRows() {
        return posts.map((post, key) => {
            return (
                <tr className="table-veiculos-linhas" key={key}>
                    <td>{post.marcaId} / {post.nome_marca}</td>
                    <td>{post.modeloId} / {post.nome}</td>
                    <td>{post.ano}</td>
                    <td>{post.combustivel}</td>
                    <td>{post.num_portas}</td>
                    <td>{post.cor}</td>
                    <td>{new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(post.valor_fipe / 100)}</td>
                    <td>{post.timestampCadastro}</td>
                </tr>
            )
        })
    }


    return(
        <div className="section-tabela-veiculos">
            <nav>
                < Navbar/>
            </nav>
            <section>
                <h1>Tabela De Veículos</h1>
                {renderTable()}
            </section>
        </div>
    );
}

export default VeiculosLista;