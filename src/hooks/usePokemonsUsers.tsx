import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { apiLocal } from '../services/apiLocal';

interface PokemonsUser {
    id: number;
    user_id: number;
    pokemon_id: number;
}

type PokemonsUserInput = Omit<PokemonsUser, 'id'>;

interface PokemonsUsersProviderProps {
    children: ReactNode;
}

interface PokemonsUsersContextData {
    pokemonsUsers: PokemonsUser[];
    createPokemonsUser: (pokemonsUser: PokemonsUserInput) => Promise<void>;
}

const PokemonsUsersContext = createContext<PokemonsUsersContextData>(
    {} as PokemonsUsersContextData,
);

const PokemonsUsersProvider: React.FC<PokemonsUsersProviderProps> = ({
    children,
}: PokemonsUsersProviderProps) => {
    const [pokemonsUsers, setPokemonsUsers] = useState<PokemonsUser[]>([]);

    /*
    useEffect(() => {
        apiLocal
            .get('/pokemonsusers')
            .then((response) => setPokemonsUsers(response.data.pokemonsUsers));
    }, []);
    */

    async function createPokemonsUser(pokemonsUserInput: PokemonsUserInput) {
        const response = await apiLocal.post(
            '/pokemonsusers',
            pokemonsUserInput,
        );
        const { pokemonsUser } = response.data;

        setPokemonsUsers([...pokemonsUsers, pokemonsUser]);
    }

    return (
        <PokemonsUsersContext.Provider
            value={{ pokemonsUsers, createPokemonsUser }}
        >
            {children}
        </PokemonsUsersContext.Provider>
    );
};

export function usePokemonsUsers() {
    const context = useContext(PokemonsUsersContext);
    return context;
}

export default PokemonsUsersProvider;
