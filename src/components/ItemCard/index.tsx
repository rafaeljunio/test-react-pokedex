import React, { useState } from 'react';
import { FiEye, FiPlus } from 'react-icons/fi';

import {
    Container,
    ContainerCard,
    ContainerId,
    ContainerType,
    ContainerName,
    ContainerOptions,
    BackgroundOptions,
} from './styles';

import ButtonLink from '../ButtonLink';

interface ItemCardProps {
    id: string;
    type?: string;
    name: string;
    viewPokemon: (value: string) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, type, name, viewPokemon }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <Container>
            <ContainerCard
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
            >
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt={name}
                />

                {isHovering && (
                    <>
                        <BackgroundOptions />
                        <ContainerOptions>
                            <ButtonLink
                                onClick={() => viewPokemon(id)}
                                style={{ backgroundColor: '#49DBDF' }}
                            >
                                <FiEye />
                            </ButtonLink>
                            <ButtonLink style={{ backgroundColor: '#3AA05B' }}>
                                <FiPlus />
                            </ButtonLink>
                        </ContainerOptions>
                    </>
                )}

                <ContainerId>
                    <h6>{id}</h6>
                </ContainerId>
                <ContainerName>
                    <h6>{name}</h6>
                </ContainerName>
                <ContainerType>
                    <h6>{type}</h6>
                </ContainerType>
            </ContainerCard>
        </Container>
    );
};

export default ItemCard;
