import React, { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { Link, Redirect } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';

import { api } from '../../services/api';
import { apiLocal } from '../../services/apiLocal';

import { Container } from './styles';

import closeImg from '../../assets/close.svg';

interface ModalViewPokemonProps {
    isOpen: boolean;
    onRequestClose: () => void;
    isOpenModalCreateUser: () => void;
}

const ModalLogin: React.FC<ModalViewPokemonProps> = ({
    isOpen,
    onRequestClose,
    isOpenModalCreateUser,
}) => {
    const [email, setEmail] = useState('test@email.com');
    const [password, setPassword] = useState('');

    const [redirectLogin, setRedirectLogin] = useState(false);
    const [msgLogin, setMsgLogin] = useState(false);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        await apiLocal
            .post('/auth', {
                email,
                password,
            })
            .then((response) => {
                console.log(typeof response.data);
                if (response.data.id) {
                    setRedirectLogin(true);
                    onRequestClose;
                } else {
                    setMsgLogin(true);
                }
            });
    }

    return (
        <>
            {redirectLogin ? <Redirect to="/pokemonsuser" /> : ''}
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
                    <h2>Login</h2>
                    {msgLogin ? <span>Usuário ou senha inválida</span> : ''}
                    <form onSubmit={handleLogin}>
                        <Input
                            placeholder="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Input
                            placeholder="senha"
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                        <Link to="/" onClick={isOpenModalCreateUser}>
                            Não tenho cadastro
                        </Link>
                        <Button type="submit">Logar</Button>
                    </form>
                </Container>
            </Modal>
        </>
    );
};

export default ModalLogin;
