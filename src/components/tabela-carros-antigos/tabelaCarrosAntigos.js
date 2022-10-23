import React, { useState, useEffect } from "react"
import axios from 'axios';
import "./styles/styleTabelaCarrosAntigos.scss"

function TabelaCarrosAntigos(){
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
                    <tr>
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
        return posts.map((post, key) => {
            return (
                    (post.ano) < 2005 ?
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
                : null
            )
        })
    }

    return(
        <div className="section-tabela-carros-antigos">
            <section>
                <h1>Carros Antigos</h1>
                {renderTable()}
            </section>
        </div>
    )
}

export default TabelaCarrosAntigos;