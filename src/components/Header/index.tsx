import React, { useState } from 'react';

import { Container, Logo, LogoCompeti } from './styles';
import Input from '../Input';
import Button from '../Button';

import logo from '../../assets/logo.png';
import logoCompeti from '../../assets/logoCompeti.png';

interface HeaderProps {
    handleSearchNamePokemon: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSearchNamePokemon }) => {
    const [nameSearchPokemon, setNameSearchPokemon] = useState<string>('');
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
            <Button>Login</Button>
            <LogoCompeti src={logoCompeti} alt="LogoCompeti" />
        </Container>
    );
};

export default Header;
