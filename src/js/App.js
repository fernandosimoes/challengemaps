import React, { Component } from 'react';
import ReactDom from "react-dom";

import '../assets/scss';
import "../assets/images"
// import '../assets/images ';

import {MapComponent} from "./components/Map";
import TableComponent from './components/Table';
import Filters from './components/Filters';
import Header from './components/Header';

import {getlojas} from './actions/lojasaction'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
    constructor(props) {
        super(props);
        props.getlojas();
    }
    render() {
        return (
            <div>
                <Header />
                <section className="content">
                    <Filters />
                </section>
                <section className="content">
                    <TableComponent />
                    <MapComponent />
                </section>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
        getlojas,
    },
    dispatch,
)

const mapStateToProps = (state, ownProps) => {
    // console.log('state', state)
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
