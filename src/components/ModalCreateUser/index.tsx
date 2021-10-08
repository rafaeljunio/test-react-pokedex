import React, { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';

import Button from '../Button';
import Input from '../Input';

import { api } from '../../services/api';
import { apiLocal } from '../../services/apiLocal';

import { Container } from './styles';

import closeImg from '../../assets/close.svg';

interface ModalViewPokemonProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const ModalCreateUser: React.FC<ModalViewPokemonProps> = ({
    isOpen,
    onRequestClose,
}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        const response = await apiLocal.post('/auth', {
            email,
            password,
        });

        console.log(response);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container>
                <h2>Cadastrar Usuário</h2>
                <form onSubmit={handleLogin}>
                    <Input
                        placeholder="Nome"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <Input
                        placeholder="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        placeholder="senha"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button type="submit">Cadastrar</Button>
                </form>
            </Container>
        </Modal>
    );
};

export default ModalCreateUser;
