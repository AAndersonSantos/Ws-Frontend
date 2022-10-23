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
        nome: "",
        valor_fipe: "",
        marcaId: "",
    });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            nome: state.nome,
            valor_fipe: state.valor_fipe.replace(/[R$.,]+/g, ""),
            marcaId: state.marcaId
        };

            axios.post('http://localhost:8080/api/modelo/created', userData)
            .then((response) => {
                console.log(response);
                closeModal();
            }).catch((err) => {
                console.log(err.response)
            });
    };

    return (
        <div>
            <Button variant="outline-primary" onClick={openModal}><span>Cadastrar Modelo</span></Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <button className='btn-fechar' onClick={closeModal}>X</button>
                <h1 className='modal-titulo'>Cadastrar Modelo</h1>
                
                <form className="formulario-register" onSubmit={handleSubmit}>
                    <label htmlFor="nome"> Modelo </label>
                    <input type="text" name="nome" value={state.nome} onChange={handleChange} />

                    <label htmlFor="valor_fipe"> Valor fipe </label>
                    <input type="number" name="valor_fipe" value={state.valor_fipe} onChange={handleChange} />

                    <label htmlFor="marcaId"> Marca ID </label>
                    <input type="number" name="marcaId" value={state.marcaId} onChange={handleChange} />

                    <button className='btn-cadastrar' type="submit">Cadastrar</button>
                </form>
            </Modal>
        </div>
    );
}

export default ComponentModal;