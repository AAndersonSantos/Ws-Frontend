import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
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
        nome_marca: "",
    });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            nome_marca: state.nome_marca,
        };

        axios.post('http://localhost:8080/api/marca/created', userData)
            .then((response) => {
                console.log(response);
                closeModal();
            }).catch((err) => {
                console.log(err.response)
            });
    };

    return (
        <div>
            <Button variant="outline-primary" onClick={openModal}><span>Cadastrar Marca</span></Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <button className='btn-fechar' onClick={closeModal}>X</button>
                <h1 className='modal-titulo'>Cadastrar Marca</h1>

                <form className="formulario-register" onSubmit={handleSubmit}>
                    <label htmlFor="nome_marca"> Marca </label>
                    <input type="text" name="nome_marca" value={state.marca} onChange={handleChange} />

                    <button className='btn-cadastrar' type="submit">Cadastrar</button>
                </form>
            </Modal>
        </div>
    );
}

export default ComponentModal;