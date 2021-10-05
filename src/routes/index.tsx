import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PokemonsUser from '../pages/PokemonsUser';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemonsuser" component={PokemonsUser} />
    </Switch>
);

export default Routes;
