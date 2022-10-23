import React, { useState, useEffect } from "react"
import axios from 'axios';
import "./styles/styleTabelaPromocao.scss"

function TabelaPromocao(){

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
            <table className="table table-hover">
                <thead>
                    <tr className="table-active">
                        <th>Modelo</th>
                        <th>Marca</th>
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
            </table>
        )
    }
    
    function renderRows() {
        return posts.sort((a, b) => a.valor_fipe > b.valor_fipe ? 1 : -1).map((post, key) => {
            return (
                <tr key={key}>
                    <td>{post.modeloId} / {post.nome}</td>
                    <td>{post.marcaId} / {post.nome_marca}</td>
                    <td>{post.ano}</td>
                    <td>{post.combustivel}</td>
                    <td>{post.num_portas}</td>
                    <td>{post.cor}</td>
                    <td>{new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(post.valor_fipe / 100)}</td>
                    <td>{post.timestampCadastro}</td>
                </tr>
            )
        }).splice(0,3)
    }

    return(
        <div className="section-tabela-carros-promocao">
            <section>
                <h1>Carros Na Promoção</h1>
                {renderTable()}
            </section>
        </div>
    )
}

export default TabelaPromocao;