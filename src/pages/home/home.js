import React from "react"
import Navbar from "../../components/navbar/navbar"
import TabelaNovosCarros from "../../components/tabela-novos-carros/tabelaNovosCarros"
import TabelaCarrosAntigos from "../../components/tabela-carros-antigos/tabelaCarrosAntigos"
import TabelaCarrosPromocao from "../../components/tabela-promocao/tabelaPromocao"
import "./styles/styleHome.scss"

function Home(){

    return (
        <div className="home">
            < Navbar/>
            <section>
                < TabelaNovosCarros />
                < TabelaCarrosAntigos />
                < TabelaCarrosPromocao />
            </section>
        </div>
    );
}

export default Home;

