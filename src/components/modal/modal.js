import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import {Button} from 'react-bootstrap';
import "./styles/styleModal.scss"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function ComponentModal() {


    let subtitle;

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {

        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [state, setState] = useState({
        nome: "",
        nome_marca: "",
        marcaId: "",
        ano: "",
        combustivel: "",
        num_portas: "",
        cor: "",
        valor_fipe: "",
        modeloId: "",
    });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            nome: state.nome,
            valor_fipe: state.valor_fipe.replace(/[R$.,]+/g, ""),
            modeloId: state.modeloId,
            nome_marca: state.nome_marca,
            ano: state.ano,
            combustivel: state.combustivel,
            num_portas: state.num_portas,
            cor: state.cor,
            marcaId: state.marcaId
        };


        /*axios.post('https://wswork-cars.herokuapp.com/api/carro/created', userData)
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err.response)
            });*/

            axios.post('https://wswork-cars.herokuapp.com/api/modelo/created', userData)
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err.response)
            });

            axios.post('https://wswork-cars.herokuapp.com/api/marca/created', userData)
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err.response)
            });
    };

    return (
        <div>
            <Button variant="outline-primary" onClick={openModal}><span>Cadastrar Veículo</span></Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <button className='btn-fechar' onClick={closeModal}>X</button>
                <h1 className='modal-titulo'>Cadastrar Veículo</h1>
                
                <form className="formulario-register" onSubmit={handleSubmit}>

                <label htmlFor="nome"> Modelo </label>
                <input type="text" name="nome" value={state.nome} onChange={handleChange} />

                <label htmlFor="valor_fipe"> Valor fipe </label>
                <input type="number" name="valor_fipe" value={state.valor_fipe} onChange={handleChange} />

                {/*<label htmlFor="modeloId"> Modelo ID </label>
                <input type="number" name="modeloId" value={state.modeloId} onChange={handleChange} />*/}

                <label htmlFor="nome_marca"> Marca </label>
                <input type="text" name="nome_marca" value={state.marca} onChange={handleChange} />

                <label htmlFor="ano"> Ano </label>
                <input type="number" name="ano" value={state.ano} onChange={handleChange} />

                <label htmlFor="combustivel"> Combustivel </label>
                <input type="text" name="combustivel" value={state.combustivel} onChange={handleChange} />

                <label htmlFor="num_portas"> Número de portas </label>
                <input type="number" name="num_portas" value={state.num_portas} onChange={handleChange} />

                <label htmlFor="cor"> Cor </label>
                <input type="text" name="cor" value={state.cor} onChange={handleChange} />

                {/*<label htmlFor="marcaId"> Marca ID </label>
                <input type="number" name="marcaId" value={state.marcaId} onChange={handleChange} />*/}

                <button className='btn-cadastrar' type="submit">Cadastrar</button>
                </form>
            </Modal>
        </div>
    );
}

export default ComponentModal;