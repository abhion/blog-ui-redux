import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const el = (
    <Provider store={configureStore()}>

    </Provider>
);

ReactDOM.render()