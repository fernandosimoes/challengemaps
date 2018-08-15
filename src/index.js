import React, { Component } from 'react';
import ReactDom from "react-dom";

import './scss';
import './images';

import {MapComponent} from "./components/Map";
import Table from './components/Table';
import Filters from './components/Filters';
import Header from './components/Header';

console.log('MapComponent', MapComponent)

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="content">
                    <Filters />
                </section>
                <section className="content">
                    <Table />
                    <MapComponent />
                </section>
            </div>
        );
    }
}

export default App;


ReactDom.render(<App />, document.querySelector('#app'));