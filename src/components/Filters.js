import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return (
            <div className="Filters">
                <div className="faturamentominimo">
                    <label htmlFor="">Faturamento minimo esperado</label>
                    <input type="text" className="minimal--value" placeholder='' />
                    {/* <span className="warning" className={errorclass}>
                        just number are acepted.
                    </span> */}
                </div>
                <div className="faturamentominimo">
                    <label htmlFor="">Faturamento minimo esperado</label>
                    <input type="text" className="minimal--value" placeholder='' />
                    {/* <span className="warning" className={errorclass}>
                        just number are acepted.
                    </span> */}
                </div>
            </div>
        );
    }
}

export default Filters;