import React, { useState } from 'react';

import { Container, Logo, LogoCompeti } from './styles';
import Input from '../Input';
import Button from '../Button';

import ModalLogin from '../ModalLogin';
import ModalCreateUser from '../ModalCreateUser';

import logo from '../../assets/logo.png';
import logoCompeti from '../../assets/logoCompeti.png';

interface HeaderProps {
    handleSearchNamePokemon: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSearchNamePokemon }) => {
    const [nameSearchPokemon, setNameSearchPokemon] = useState<string>('');

    const [isOpenModalLogin, setOpenModalLogin] = useState(false);
    const [isOpenModalCreateUser, setOpenModalCreateUser] = useState(false);

    function handleCloseModalLogin() {
        setOpenModalLogin(false);
    }

    function handleOpenModalLogin() {
        setOpenModalLogin(true);
    }

    function handleCloseModalCreateUser() {
        setOpenModalCreateUser(false);
    }

    function handleOpenModalCreateUser() {
        setOpenModalLogin(false);
        setOpenModalCreateUser(true);
    }

    return (
        <Container>
            <Logo src={logo} alt="Pokemon" />
            <Input
                placeholder="Search Pokémon"
                onChange={(event) => setNameSearchPokemon(event.target.value)}
                value={nameSearchPokemon}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        handleSearchNamePokemon(nameSearchPokemon);
                    }
                }}
            />
            <Button onClick={handleOpenModalLogin}>Login</Button>
            <LogoCompeti src={logoCompeti} alt="LogoCompeti" />
            <ModalLogin
                isOpen={isOpenModalLogin}
                onRequestClose={handleCloseModalLogin}
                isOpenModalCreateUser={handleOpenModalCreateUser}
            />
            <ModalCreateUser
                isOpen={isOpenModalCreateUser}
                onRequestClose={handleCloseModalCreateUser}
            />
        </Container>
    );
};

export default Header;
