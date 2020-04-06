import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { startGetUsers } from './actions/usersAction';
import  { startGetPosts } from './actions/postsAction';

const store = configureStore();
store.dispatch(startGetUsers());
store.dispatch(startGetPosts());

const el = (
    <Provider store={configureStore()}>
        <App />
    </Provider>
);

ReactDOM.render(el, document.getElementById('root'));