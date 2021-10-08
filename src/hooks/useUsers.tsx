import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

import { apiLocal } from '../services/apiLocal';

interface User {
    id: number;
    name: string;
    email: number;
    password: string;
}

type UserInput = Omit<User, 'id'>;

interface UsersProviderProps {
    children: ReactNode;
}

interface UsersContextData {
    users: User[];
    createUser: (user: UserInput) => Promise<void>;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

const UsersProvider: React.FC<UsersProviderProps> = ({
    children,
}: UsersProviderProps) => {
    const [users, setUsers] = useState<User[]>([]);

    async function createUser(userInput: UserInput) {
        const response = await apiLocal.post('/users', userInput);
        const { user } = response.data;

        setUsers([...users, user]);
    }

    return (
        <UsersContext.Provider value={{ users, createUser }}>
            {children}
        </UsersContext.Provider>
    );
};

export function useUsers() {
    const context = useContext(UsersContext);
    return context;
}

export default UsersProvider;
