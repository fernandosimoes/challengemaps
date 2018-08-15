import React, { Component } from 'react';
import Pagination from "./Pagination";
class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            totalPages: []
        }
        this.groupPages = this.groupPages.bind(this)
        this.changePage = this.changePage.bind(this)
    }

    groupPages() {
        console.log('store', lojas.stores.length / 10)
        let groupStore = [];
        let page = []
        var groups = [], i;
        for (i = 0; i < lojas.stores.length; i += 10) {
            groups.push(lojas.stores.slice(i, i + 10));
        }

        this.setState({
            totalPages: groups
        })
    }
    changePage(direction) {

        if (direction == 'decrement') {
            const nextpage = this.state.currentPage-1;
            if (nextpage >= 0 && nextpage < this.state.totalPages.length - 1) {
                this.setState({
                    currentPage: nextpage
                })
            }
        } else if (direction == 'increment') {
            const nextpage = this.state.currentPage + 1;
            if (nextpage >= 0 && nextpage < this.state.totalPages.length-1) {
                this.setState({
                    currentPage: nextpage
                })
            }
            
        }
    }

    countPages() {
            // console.log('store', lojas.stores.length / 10) 
            // const groupStore = [];
            // lojas.stores.filter((store, kstore)=>{
            //     console.log('sotre', kstore)
            // })
            
    }
    

    render() {
        if (!this.state.totalPages.length){
            return "loading";
        }
        return (
            <div className="tablecontent">
                <div className="table">
                    <p className="line">
                        <span className="lojaname">
                            Loja
                        </span>
                        <span className="faturamento">
                            Faturamento
                        </span>
                    </p>
                    {this.state.totalPages[this.state.currentPage].map((store, kstore)=>{
                        if(store.revenue < 15000) {
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
                <Pagination changepage={this.changePage}/>
            </div>
        );
    }

    componentDidMount() {
        this.groupPages();
    }
}

export default Table;

const lojas = {
    "stores": [
        { "name": "Alameda Santos", "city": "São Paulo", "state": "SP", "latitude": -23.568767, "longitude": -46.649907, "revenue": 29854.12 },
        { "name": "Av Paulista", "city": "São Paulo", "state": "SP", "latitude": -23.565972, "longitude": -46.650859, "revenue": 31257.23 },
        { "name": "Av Paulista Novo", "city": "São Paulo", "state": "SP", "latitude": -23.563703, "longitude": -46.653542, "revenue": 19874.25 },
        { "name": "Bandeirantes", "city": "São Paulo", "state": "SP", "latitude": -23.616359, "longitude": -46.664749, "revenue": 21587.33 },
        { "name": "Barão do Triunfo", "city": "São Paulo", "state": "SP", "latitude": -23.624203, "longitude": -46.683369, "revenue": 12569.95 },
        { "name": "Bela Vista", "city": "São Paulo", "state": "SP", "latitude": -23.565972, "longitude": -46.650859, "revenue": 22365.54 },
        { "name": "Brigadeiro Faria Lima", "city": "São Paulo", "state": "SP", "latitude": -23.572424, "longitude": -46.65384, "revenue": 17988.36 },
        { "name": "Brooklin", "city": "São Paulo", "state": "SP", "latitude": -23.610235, "longitude": -46.69591, "revenue": 12578.22 },
        { "name": "Brooklin 2", "city": "São Paulo", "state": "SP", "latitude": -23.609215, "longitude": -46.69753, "revenue": 12589.27 },
        { "name": "Brooklin Novo", "city": "São Paulo", "state": "SP", "latitude": -23.608786, "longitude": -46.697448, "revenue": 17455.96 },
        { "name": "Campo Belo 1", "city": "São Paulo", "state": "SP", "latitude": -23.617262, "longitude": -46.674802, "revenue": 36566.54 },
        { "name": "Campo Belo 2", "city": "São Paulo", "state": "SP", "latitude": -23.620757, "longitude": -46.673658, "revenue": 15478.63 },
        { "name": "Campus Morumbi", "city": "São Paulo", "state": "SP", "latitude": -23.625349, "longitude": -46.692239, "revenue": 26985.21 },
        { "name": "Cerqueira César Nova", "city": "São Paulo", "state": "SP", "latitude": -23.565972, "longitude": -46.650859, "revenue": 16985.55 },
        { "name": "Cerqueria Cesar", "city": "São Paulo", "state": "SP", "latitude": -23.564909, "longitude": -46.654558, "revenue": 14786.84 },
        { "name": "Chácara Flora", "city": "São Paulo", "state": "SP", "latitude": -23.642676, "longitude": -46.672727, "revenue": 11233.01 },
        { "name": "Chácara Itaim", "city": "São Paulo", "state": "SP", "latitude": -23.608786, "longitude": -46.697448, "revenue": 23699.96 },
        { "name": "Cidades Monções", "city": "São Paulo", "state": "SP", "latitude": -23.610652, "longitude": -46.686046, "revenue": 15887.24 },
        { "name": "Faria Lima", "city": "São Paulo", "state": "SP", "latitude": -23.573285, "longitude": -46.689102, "revenue": 14755.22 },
        { "name": "Ibirapuera", "city": "São Paulo", "state": "SP", "latitude": -23.609215, "longitude": -46.667182, "revenue": 26951.36 },
        { "name": "Ibirapuera 2", "city": "São Paulo", "state": "SP", "latitude": -23.609215, "longitude": -46.667182, "revenue": 14568.1 },
        { "name": "Indianápolis", "city": "São Paulo", "state": "SP", "latitude": -23.60997, "longitude": -46.667902, "revenue": 21477.22 },
        { "name": "Itaim", "city": "São Paulo", "state": "SP", "latitude": -23.584718, "longitude": -46.675473, "revenue": 13954.14 },
        { "name": "Itaim Bibi 1", "city": "São Paulo", "state": "SP", "latitude": -23.584718, "longitude": -46.675473, "revenue": 23147.36 },
        { "name": "Itaim Bibi 2", "city": "São Paulo", "state": "SP", "latitude": -23.607909, "longitude": -46.692784, "revenue": 32457.98 },
        { "name": "Itaim Bibi 3", "city": "São Paulo", "state": "SP", "latitude": -23.594718, "longitude": -46.635473, "revenue": 35966.47 },
        { "name": "Jardim Paulista", "city": "São Paulo", "state": "SP", "latitude": -23.564552, "longitude": -46.654713, "revenue": 25845.15 },
        { "name": "Jardim Paulistano", "city": "São Paulo", "state": "SP", "latitude": -23.573263, "longitude": -46.695077, "revenue": 14897.74 },
        { "name": "Jardim Petrópolis", "city": "São Paulo", "state": "SP", "latitude": -23.633372, "longitude": -46.680053, "revenue": 25896.85 },
        { "name": "Jardim São Luiz", "city": "São Paulo", "state": "SP", "latitude": -23.64717, "longitude": -46.727572, "revenue": 44188.44 },
        { "name": "Jd. Paulistano", "city": "São Paulo", "state": "SP", "latitude": -23.576715, "longitude": -46.68747, "revenue": 22846.45 },
        { "name": "Moema", "city": "São Paulo", "state": "SP", "latitude": -23.609215, "longitude": -46.667182, "revenue": 14556.93 },
        { "name": "Moema 1", "city": "São Paulo", "state": "SP", "latitude": -23.609215, "longitude": -46.667182, "revenue": 24589.35 },
        { "name": "Moema 2", "city": "São Paulo", "state": "SP", "latitude": -23.52631, "longitude": -46.616194, "revenue": 32547.45 },
        { "name": "Moema 3", "city": "São Paulo", "state": "SP", "latitude": -23.614064, "longitude": -46.668883, "revenue": 23854.18 },
        { "name": "Nações Unidas", "city": "São Paulo", "state": "SP", "latitude": -23.608786, "longitude": -46.697448, "revenue": 23695.75 },
        { "name": "Nova Conceição", "city": "São Paulo", "state": "SP", "latitude": -23.587921, "longitude": -46.6767, "revenue": 25478.34 },
        { "name": "Paraiso 1", "city": "São Paulo", "state": "SP", "latitude": -23.573691, "longitude": -46.643678, "revenue": 22369.41 },
        { "name": "Paraiso 2", "city": "São Paulo", "state": "SP", "latitude": -23.573691, "longitude": -46.643678, "revenue": 23958.36 },
        { "name": "Parque Colonial", "city": "São Paulo", "state": "SP", "latitude": -23.627158, "longitude": -46.675183, "revenue": 21547.14 },
        { "name": "Pinheiros 1", "city": "São Paulo", "state": "SP", "latitude": -23.573263, "longitude": -46.695077, "revenue": 23645.25 },
        { "name": "Pinheiros 2", "city": "São Paulo", "state": "SP", "latitude": -23.573263, "longitude": -46.695077, "revenue": 24856.35 },
        { "name": "Planalto Paulista", "city": "São Paulo", "state": "SP", "latitude": -23.572269, "longitude": -46.689863, "revenue": 24856.74 },
        { "name": "Rebouças", "city": "São Paulo", "state": "SP", "latitude": -23.573263, "longitude": -46.695077, "revenue": 23547.41 },
        { "name": "Santo Amaro", "city": "São Paulo", "state": "SP", "latitude": -23.628932, "longitude": -46.665837, "revenue": 21458.36 },
        { "name": "Saude", "city": "São Paulo", "state": "SP", "latitude": -23.61506, "longitude": -46.659242, "revenue": 9125.52 },
        { "name": "Vila Guilherme", "city": "São Paulo", "state": "SP", "latitude": -23.528071, "longitude": -46.586955, "revenue": 16995.12 },
        { "name": "Vila Nova Conceição", "city": "São Paulo", "state": "SP", "latitude": -23.595269, "longitude": -46.669645, "revenue": 21958.29 },
        { "name": "Vila Olimpia", "city": "São Paulo", "state": "SP", "latitude": -23.596066, "longitude": -46.686917, "revenue": 21447.54 },
        { "name": "Zacarias de Góis", "city": "São Paulo", "state": "SP", "latitude": -23.627158, "longitude": -46.675183, "revenue": 20599.34 }
    ]
}
