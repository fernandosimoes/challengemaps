import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeminimumvalue, filterstores, showPageStoreonMap } from "../actions/lojasaction";
import CurrencyFormat from "react-currency-format";
import searchimage from  "../../assets/images/search.svg";

const stylebgsearch = {
    backgroundImage: `url(${searchimage})`,
}


class Filters extends Component {
    constructor(props) {
        super(props);
        this.filterprice = this.filterprice.bind(this)
        this.filterbyname = this.filterbyname.bind(this)
        this.filterpagesonmap = this.filterpagesonmap.bind(this)
    }

    filterprice(e) {
        this.props.changeminimumvalue(e.target.value)
    }

    filterbyname (e) {


        this.props.filterstores(String(e.target.value).toLocaleLowerCase(), this.props.todaslojas);
    }

    filterpagesonmap () {
        const newvalue = this.props.pagesonmap ? false : true;
        this.props.showPageStoreonMap(newvalue);
    }

    render() {
        const placeholder = () => (<CurrencyFormat  value={this.props.minimumvalue} Type={'text'} thousandSeparator={true} prefix={'R$ '} />);
        return (
            <div className="filter">
                <div className="columns inputs">
                    <div className="column search">
                        <input type="text" className="searchinput" style={stylebgsearch} value={this.props.filtro} placeholder="Pesquisa" onChange={this.filterbyname}  />
                        {/* <span className="warning" className={errorclass}>
                            just number are acepted.
                        </span> */}
                    </div>
                    <div className="column faturamentominimo">
                        <div className="minimumvalue">
                            <label htmlFor="">Faturamento minimo esperado</label><br />
                            <input type="text" className="minimumvalueinput" onChange={this.filterprice} placeholder={this.props.minimumvalue}/>
                        </div>
                        {!this.props.pagesonmap && <button className="button" onClick={this.filterpagesonmap}>Mostrar apenas lojas da tabela</button>}
                        {this.props.pagesonmap && <button className="button" onClick={this.filterpagesonmap}>Mostrar todas lojas no mapa</button>}
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        lojas: state.lojas,
        minimumvalue: state.minimumvalue,
        todaslojas: state.todaslojas,
        filtro: state.filtro,
        pagesonmap: state.pagesonmap
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeminimumvalue: (value) => { dispatch(changeminimumvalue(value))},
        filterstores: (value, stores) => { dispatch(filterstores(value, stores))},
        showPageStoreonMap: (value) => { dispatch(showPageStoreonMap(value))}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
// export default Filters;
