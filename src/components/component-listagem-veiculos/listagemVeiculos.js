import React, { useState, useEffect } from "react"
import moment from 'moment'
import axios from 'axios';

function ListagemVeiculos() {

    const [posts, setPosts] = useState([]);
//https://wswork-cars.herokuapp.com/api/carro
    useEffect(() => {
        axios.get("https://wswork-cars.herokuapp.com/api/carro").then((res) => {
            setPosts(res.data)
            console.log(res);
        }).catch((err) => {
            console.log(err.response)
        })

    }, [])

    /*function renderTable() {
        return posts.map((post, key) => {
            return (
                <div key={key}>{moment('09/09/2021 13:30:24').isBefore(post.timestampCadastro) === true ?
                    <tr>
                        <td>{post.modelo.marca.nome_marca}</td>
                        <td>{post.modelo.nome}</td>
                        <td>{post.ano}</td>
                        <td>{post.combustivel}</td>
                        <td>{post.num_portas}</td>
                        <td>{post.cor}</td>
                        <td>{new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(post.modelo.valor_fipe / 100)}</td>
                        <td>{post.timestampCadastro}</td>
                    </tr> : null}
                </div>
            )
        })
    }*/

    function renderTable() {
        return posts.sort((a, b) => a.modelo.valor_fipe > b.modelo.valor_fipe ? 1 : -1).map((post, key) => {
            return (
                <div key={key}>
                    <tr>
                        <td>{new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' }).format(post.modelo.valor_fipe / 100)}</td>
                    </tr>
                </div>
            )
        }).splice(0,2)
    }
   
   return (
       <>
        {renderTable()}
       </>
    )
}

export default ListagemVeiculos;