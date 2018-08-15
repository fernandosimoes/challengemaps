import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeminimumvalue, filterstores } from "../actions/lojasaction";

class Filters extends Component {
    constructor(props) {
        super(props);
        this.filterprice = this.filterprice.bind(this)
        this.filterbyname = this.filterbyname.bind(this)
    }

    filterprice(e) {
        console.log('e', e.target.value);
        this.props.changeminimumvalue(e.target.value)
    }

    filterbyname (e) {
        const filtred = this.props.todaslojas.filter(function (elem, index, array) {
            if (String(elem.name).toLowerCase().includes(String(e.target.value).toLocaleLowerCase())) {
                return elem
            }
        });

        this.props.filterstores(filtred);
        
    }

    render() {
        return (
            <div className="filters">
                <div className="search">
                    <label htmlFor="">Faturamento minimo esperado</label>
                    <input type="text" className="minimal--value" placeholder='' onChange={this.filterbyname}  />
                    {/* <span className="warning" className={errorclass}>
                        just number are acepted.
                    </span> */}
                </div>
                <div className="faturamentominimo">
                    <label htmlFor="">Faturamento minimo esperado</label>
                    <input type="text" className="minimal--value" onChange={this.filterprice} placeholder={this.props.minimumvalue} />
                    {/* <span className="warning" className={errorclass}>
                        just number are acepted.
                    </span> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        lojas: state.lojas,
        minimumvalue: state.minimumvalue,
        todaslojas: state.todaslojas
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeminimumvalue: (value) => { dispatch(changeminimumvalue(value))},
        filterstores: (value) => { dispatch(filterstores(value))}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
// export default Filters;
