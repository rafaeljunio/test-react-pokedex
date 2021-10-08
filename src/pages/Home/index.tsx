/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import Select, { SingleValue } from 'react-select';
import Carousel from 'react-elastic-carousel';

import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import Pagination from '../../components/Pagination';
import ModalViewPokemon from '../../components/ModalViewPokemon';
import ItemCarousel from '../../components/ItemCarousel';

import {
    Container,
    ListItemCardsContainer,
    ContainerSelect,
    ContainerCarousel,
} from './styles';

import { api } from '../../services/api';

interface Pokemon {
    pokemon: Types;
}

interface Types {
    id?: string;
    name: string;
    url: string;
}

interface OptionTypes {
    value: string;
    label: string;
}

interface PokemonProps {
    id: string;
    name: string;
    type?: string;
}

interface PokemonGetAllProps {
    id: string;
    name: string;
    types: [
        {
            type: {
                name: string;
            };
        },
    ];
}

const Home: React.FC = () => {
    const [types, setTypes] = useState<[]>([]);
    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
    const [pageState, setPage] = useState<number>(1);
    const [rowsState, setRows] = useState(6);
    const [pokemonsDataFilter, setPokemonsDataFilter] =
        useState<PokemonProps[]>();
    const [totalPages, setTotalPages] = useState(0);
    const [typeSelected, setTypeSelected] = useState<string>();

    const [allPokemons, setAllPokemons] = useState<PokemonGetAllProps[]>([]);

    async function handleChangeSelect(option?: SingleValue<OptionTypes>) {
        setTypeSelected(option?.label);

        const pokemonArrayList: PokemonProps[] = [];

        await api.get(`${option?.value}`).then((response) => {
            const arr = response.data.pokemon;

            arr.map((pokemon: Pokemon) => {
                const id = pokemon.pokemon.url.split('/');
                pokemonArrayList.push({
                    id: id[6],
                    name: pokemon.pokemon.name,
                });
                return pokemonArrayList;
            });

            setPokemons(pokemonArrayList);
            const data = pagination(pokemonArrayList, pageState, rowsState);
            setPokemonsDataFilter(data);
        });
    }

    function handleSearchNamePokemon(nameSearchPokemon: string) {
        const pokemonArrayList: PokemonProps[] = [];

        if (nameSearchPokemon !== '') {
            api.get(`pokemon/${nameSearchPokemon}`)
                // eslint-disable-next-line consistent-return
                .then((response) => {
                    try {
                        const id = response.data.species.url.split('/');
                        pokemonArrayList.push({
                            id: id[6],
                            name: response.data.species.name,
                            type: response.data.types[0].type.name,
                        });
                        setPokemons(pokemonArrayList);
                    } catch (err) {
                        // console.log(err);
                    }
                })
                .catch((err) => {
                    // console.log(err);
                    setPokemonsDataFilter([]);
                });
        }
    }

    useEffect(() => {
        api.get(`/type`).then((response) => {
            setTypes(
                response.data.results.map((obj: Types) => ({
                    value: obj.url,
                    label: obj.name,
                })),
            );
            console.log(types);
        });

        /*
        fetch('/api/pokemonsUser')
            .then((res) => res.json())
            .then((json) => console.log(json));
*/
        const data = pagination(pokemons, pageState, rowsState);
        setPokemonsDataFilter(data);
    }, [pageState, pokemons, rowsState]);

    useEffect(() => {
        setAllPokemons([]);
        loadCarousel();
    }, []);

    const loadCarousel = async () => {
        const num = Math.floor(Math.random() * 150);
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${num}`,
        );
        const data = await res.json();

        function createPokemonObject(result: PokemonProps[]) {
            result.forEach(async (pokemon: PokemonProps) => {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
                );
                const dataObj = await response.json();
                setAllPokemons((current) => [...current, dataObj]);
            });
        }

        createPokemonObject(data.results);
    };

    function pagination(querySet: PokemonProps[], page: number, rows: number) {
        const trimStart = (page - 1) * rows;
        const trimEnd = trimStart + rows;
        const trimmedData = querySet.slice(trimStart, trimEnd);
        const pages = Math.ceil(querySet.length / rows);
        setTotalPages(pages);
        return trimmedData;
    }

    console.log(allPokemons);

    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 5, itemsToScroll: 2 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 5 },
    ];

    /* MODAL */

    interface GetPokemonModalProps {
        id: string;
        name: string;
    }

    const [openModal, setOpenModal] = useState(false);
    const [getPokemonModal, setGetPokemonModal] = useState(
        {} as GetPokemonModalProps,
    );

    function handleModalViewPokemon(id: string, name: string) {
        setGetPokemonModal({ id, name });
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }

    return (
        <>
            <Header handleSearchNamePokemon={handleSearchNamePokemon} />
            <Container>
                <ContainerSelect>
                    <label>Filter</label>
                    <Select options={types} onChange={handleChangeSelect} />
                </ContainerSelect>
                <hr />

                <ListItemCardsContainer>
                    {pokemonsDataFilter && pokemonsDataFilter.length ? (
                        pokemonsDataFilter?.map((pokemon) => (
                            <ItemCard
                                key={pokemon.id}
                                id={pokemon.id}
                                name={pokemon.name}
                                type={pokemon.type ?? typeSelected}
                                viewPokemon={() =>
                                    handleModalViewPokemon(
                                        pokemon.id,
                                        pokemon.name,
                                    )
                                }
                            />
                        ))
                    ) : (
                        <h1>Resource not found</h1>
                    )}
                </ListItemCardsContainer>

                {pokemonsDataFilter && pokemonsDataFilter.length ? (
                    <Pagination
                        pages={totalPages}
                        setPage={setPage}
                        page={pageState}
                    />
                ) : null}
            </Container>
            <ContainerCarousel>
                <Carousel isRTL={false} breakPoints={breakPoints}>
                    {allPokemons.map((pokemon) => (
                        <ItemCarousel
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.types[0].type.name}
                            viewPokemon={() =>
                                handleModalViewPokemon(pokemon.id, pokemon.name)
                            }
                        />
                    ))}
                </Carousel>
            </ContainerCarousel>

            <ModalViewPokemon
                isOpen={openModal}
                onRequestClose={handleCloseModal}
                getPokemonModal={getPokemonModal}
            />
        </>
    );
};

export default Home;
