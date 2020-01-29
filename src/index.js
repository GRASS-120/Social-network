import './index.css';
import STORE from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


let reRenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App STATE={STORE.getState()} dispatch={STORE.dispatch.bind(STORE)}/>
        </BrowserRouter>, document.getElementById('root'));
}

reRenderEntireTree(STORE.getState());
STORE.subscribe(reRenderEntireTree)