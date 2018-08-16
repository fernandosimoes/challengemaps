import React, { Component } from 'react';
import ReactDom from "react-dom";
import App from './js/App'
// redux dependencias
import { Provider } from 'react-redux';
import store from './js/reducers';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDom.render(
    <Router>
        <Switch>
            <Provider store={store()} >
                <div>
                    <Route exact path="/" component={App} />
                    <Route exact path='/:search' component={App} />
                    {/* <Route exact path='/:page' component={App} /> */}
                </div>
            </Provider>
        </Switch>
    </Router>
// );
    // <Router>

    //     </Provider>
    // </Router>
    ,
document.querySelector('#app'));