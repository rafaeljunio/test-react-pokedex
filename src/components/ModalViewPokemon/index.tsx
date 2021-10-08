import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';

import { Container } from './styles';

import closeImg from '../../assets/close.svg';

interface PokemonStatsProps {
    // eslint-disable-next-line camelcase
    base_stat: number;
    stat: {
        name: string;
    };
}

interface ModalViewPokemonProps {
    isOpen: boolean;
    onRequestClose: () => void;
    getPokemonModal: {
        id: string;
        name: string;
    };
}

const ModalViewPokemon: React.FC<ModalViewPokemonProps> = ({
    isOpen,
    onRequestClose,
    getPokemonModal = {},
}) => {
    const [isModal, setIsModal] = useState(true);

    const [pokemonNameModal, setPokemonNameModal] = useState<string>();
    const [pokemonIdModal, setPokemonIdModal] = useState<string>();
    const [pokemonModalData, setPokemonModalData] = useState<
        PokemonStatsProps[]
    >([]);

    function handleOpenModal() {
        setIsModal(true);
    }

    function handleCloseModal() {
        setIsModal(false);
    }

    useEffect(() => {
        if (Object.keys(getPokemonModal).length !== 0) {
            api.get(`/pokemon/${getPokemonModal.id}`).then((response) => {
                setPokemonModalData(response.data.stats);
            });
        }
    }, [getPokemonModal]);

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
                <h2>{getPokemonModal.name}</h2>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getPokemonModal.id}.svg`}
                    alt={getPokemonModal.name}
                />
                {pokemonModalData.map((status) => (
                    <>
                        <li>
                            <b>{status.stat.name}</b> - {status.base_stat}
                        </li>
                    </>
                ))}
            </Container>
        </Modal>
    );
};

export default ModalViewPokemon;
