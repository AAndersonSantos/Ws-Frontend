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

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [state, setState] = useState({
        modeloId: "",
        ano: "",
        combustivel: "",
        num_portas: "",
        cor: "",
    });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            modeloId: state.modeloId,
            ano: state.ano,
            combustivel: state.combustivel,
            num_portas: state.num_portas,
            cor: state.cor,
        };

            axios.post('http://localhost:8080/api/carro/created', userData)
            .then((response) => {
                console.log(response);
                closeModal();
                window.location.reload();
            }).catch((err) => {
                console.log(err.response)
            });
    };

    return (
        <div>
            <Button variant="outline-primary" onClick={openModal}><span>Cadastrar Veículo</span></Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <button className='btn-fechar' onClick={closeModal}>X</button>
                <h1 className='modal-titulo'>Cadastrar Veículo</h1>
                
                <form className="formulario-register" onSubmit={handleSubmit}>

                    <label htmlFor="modeloId"> Modelo ID </label>
                    <input type="number" name="modeloId" value={state.modeloId} onChange={handleChange} />

                    <label htmlFor="ano"> Ano </label>
                    <input type="number" name="ano" value={state.ano} onChange={handleChange} />

                    <label htmlFor="combustivel"> Combustivel </label>
                    <input type="text" name="combustivel" value={state.combustivel} onChange={handleChange} />

                    <label htmlFor="num_portas"> Número de portas </label>
                    <input type="number" name="num_portas" value={state.num_portas} onChange={handleChange} />

                    <label htmlFor="cor"> Cor </label>
                    <input type="text" name="cor" value={state.cor} onChange={handleChange} />

                    <button className='btn-cadastrar' type="submit">Cadastrar</button>
                </form>
            </Modal>
        </div>
    );
}

export default ComponentModal;