import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model, hasMany, belongsTo } from 'miragejs';
import App from './App';

import './server';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
