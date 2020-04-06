import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const el = (
    <Provider store={configureStore()}>
        <App />
    </Provider>
);

ReactDOM.render(el, document.getElementById('root'));