import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import UsePokemonsUsers from './hooks/usePokemonsUsers';
import UseUsers from './hooks/useUsers';

const App: React.FC = () => {
    return (
        <UsePokemonsUsers>
            <UseUsers>
                <BrowserRouter>
                    <Routes />
                    <GlobalStyle />
                </BrowserRouter>
            </UseUsers>
        </UsePokemonsUsers>
    );
};

export default App;
