import React, { Component } from 'react';
import ReactDom from "react-dom";

import '../assets/scss';
import "../assets/images"
// import '../assets/images ';

import { MapComponent } from "./components/Map";
import { Table } from './components/Table';
import { Filters } from './components/Filters';
import Header from './components/Header';

import { getlojas, changepage, filterstores } from './actions/lojasaction'
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
                <section className="container">
                    <Filters />
                </section>
                <section className="container">
                    <div className="columns">
                        <div className="column">
                            <Table />
                        </div>
                        <div className="column">
                            <MapComponent />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    componentDidMount() {
        if(typeof this.props.match.params.search !== "undefined") {
            if(this.props.match.params.search.includes('page')) {
                let page = this.props.match.params.search.replace('page', '');
                page = (page.replace(/=|-|@|#|$|%|&|8*/g, ''))-1;

                if(page < 0) {
                    console.log('page');
                    page = 0;
                }
                console.log(page)
                this.props.changepage(page)
            } else {
                const searchpage = this.props.match.params.search.replace(/=|-|@|#|$|%|&|8*/g, '');
                this.props.filterstores(searchpage);
            }
        }
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
        getlojas,
        changepage,
        filterstores
    },
    dispatch,
)

const mapStateToProps = (state, ownProps) => {
    return {
        todaslojas: state.todaslojas,
        totalpages: state.splitedPages.length,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
