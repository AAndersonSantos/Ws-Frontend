import React, { useState, useEffect } from "react"
//import moment from 'moment'
import axios from 'axios';
import "./styles/styleTabelaNovosCarros.scss"

function TabelaNovosCarros() {
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
                        <th>ID / Modelo</th>
                        <th>ID / Marca</th>
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
        return posts.map((post, key) => {
            return (
                //moment('01/01/2022 12:00:19').isBefore(post.timestampCadastro) === true ?
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
                //: null
            )
        }).slice(0, 5)
    }

    return (
        <div className="section-tabela-novos-carros">
            <section>
                <h1>Novos Carros</h1>
                {renderTable()}
            </section>
        </div>
    )
}

export default TabelaNovosCarros;