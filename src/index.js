import React, { Component } from 'react';
import ReactDom from "react-dom";
import App from './js/App'
// redux dependencias
import { Provider } from 'react-redux';
import store from './js/reducers';

ReactDom.render(
    <Provider store={store()} >
        <App />
    </Provider>,
document.querySelector('#app'));