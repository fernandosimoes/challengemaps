import React, { Component } from 'react';
import ReactDom from "react-dom";

import './scss';
import './images';

import Map from "./components/Map";
import Table from './components/Table';
import Header from './components/Header';



class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="content">
                    <Table />
                    <Map />
                </section>
            </div>
        );
    }
}

export default App;


ReactDom.render(<App />, document.querySelector('#app'));