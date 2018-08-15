import React, { Component } from 'react';
import Pagination from "./Pagination";

import { changepage, sorteValue, sorteByName } from "../actions/lojasaction";
import { connect } from 'react-redux';



class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.changelocalpage = this.changelocalpage.bind(this)
        this.orderByValue = this.orderByValue.bind(this)
        this.orderByName = this.orderByName.bind(this)
        this.state = {
            direction: 'asc',
            directionName: 'asc'
        }
    }

    changelocalpage(page) {
        if (page < 0 || page >= this.props.splitedPages.length) {
            return false;
        }
        this.props.changepage(page);
        
    }
    orderByName() {
        
        if (this.state.directionName == 'asc') {
            this.setState({ directionName: 'desc' })
        } else {
            this.setState({ directionName: 'asc' })
        }
        this.props.sorteByName(this.state.directionName, this.props.todaslojas)
    }
    orderByValue(direction) {
        let sortedValue;
        if(this.state.direction == 'asc') {
            sortedValue = this.props.lojas.sort((a, b) => {
                return a.revenue - b.revenue;
            })
            this.setState({direction: 'desc'})
        } else {
            sortedValue = this.props.lojas.sort((a, b) => {
                return b.revenue - a.revenue;
            })
            this.setState({ direction: 'asc' })
        }
        this.props.sorteValue(sortedValue)
    }

    render() {

        if (!this.props.splitedPages.length){
            return "loading";
        }
        return (
            <div className="tablecontent">
                <div className="table">
                    <p className="line">
                        <span className="lojaname" onClick={this.orderByName}>
                            Loja
                        </span>
                        <span className="faturamento" onClick={this.orderByValue}>
                            Faturamento
                        </span>
                    </p>
                    {this.props.splitedPages[this.props.currentPage].map((store, kstore)=>{
                        if (store.revenue < this.props.minimumvalue) {
                            return (<p key={kstore} className="line">
                                <span className="lojaname">{store.name}</span>
                                <span className="faturamento low">{store.revenue}</span>
                            </p>)
                        } else {
                            return (<p key={kstore} className="line">
                                <span className="lojaname">{store.name}</span>
                                <span className="faturamento">{store.revenue}</span>
                            </p>)
                        }

                    })}
                </div>
                <Pagination changepage={this.changelocalpage} totalPages={this.props.splitedPages.length} currentPage={this.props.currentPage}/>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        lojas: state.lojas,
        todaslojas: state.todaslojas,
        currentPage: state.currentPage,
        splitedPages: state.splitedPages,
        minimumvalue: state.minimumvalue
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changepage: (page) => { dispatch(changepage(page)) },
        sorteValue: (ordered) => { dispatch(sorteValue(ordered)) },
        sorteByName: (direction, lojas) => { dispatch(sorteByName(direction, lojas)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)
// export default Filters;
