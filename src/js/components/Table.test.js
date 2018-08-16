// Link.react.test.js
import React from 'react';
import { TableComponent } from './Table';
import renderer from 'react-test-renderer';
import {configure, shallow, mount} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const fakeobj={"stores": [
    { "name": "Alameda Santos", "city": "São Paulo", "state": "SP", "latitude": -23.568767, "longitude": -46.649907, "revenue": 29854.12 },
    { "name": "Av Paulista", "city": "São Paulo", "state": "SP", "latitude": -23.565972, "longitude": -46.650859, "revenue": 31257.23 },
    { "name": "Av Paulista Novo", "city": "São Paulo", "state": "SP", "latitude": -23.563703, "longitude": -46.653542, "revenue": 19874.25 },
    { "name": "Bandeirantes", "city": "São Paulo", "state": "SP", "latitude": -23.616359, "longitude": -46.664749, "revenue": 21587.33 },
    { "name": "Barão do Triunfo", "city": "São Paulo", "state": "SP", "latitude": -23.624203, "longitude": -46.683369, "revenue": 12569.95 },
    { "name": "Bela Vista", "city": "São Paulo", "state": "SP", "latitude": -23.565972, "longitude": -46.650859, "revenue": 22365.54 },
    { "name": "Brigadeiro Faria Lima", "city": "São Paulo", "state": "SP", "latitude": -23.572424, "longitude": -46.65384, "revenue": 17988.36 },
    { "name": "Brooklin", "city": "São Paulo", "state": "SP", "latitude": -23.610235, "longitude": -46.69591, "revenue": 12578.22 },
    { "name": "Brooklin 2", "city": "São Paulo", "state": "SP", "latitude": -23.609215, "longitude": -46.69753, "revenue": 12589.27 }
]}
const splitedPages =[
    [
        { "name": "Alameda Santos", "city": "São Paulo", "state": "SP", "latitude": -23.568767, "longitude": -46.649907, "revenue": 29854.12 },
        { "name": "Av Paulista", "city": "São Paulo", "state": "SP", "latitude": -23.565972, "longitude": -46.650859, "revenue": 31257.23 },
        { "name": "Av Paulista Novo", "city": "São Paulo", "state": "SP", "latitude": -23.563703, "longitude": -46.653542, "revenue": 19874.25 },
        { "name": "Bandeirantes", "city": "São Paulo", "state": "SP", "latitude": -23.616359, "longitude": -46.664749, "revenue": 21587.33 },
        { "name": "Barão do Triunfo", "city": "São Paulo", "state": "SP", "latitude": -23.624203, "longitude": -46.683369, "revenue": 12569.95 },
        { "name": "Bela Vista", "city": "São Paulo", "state": "SP", "latitude": -23.565972, "longitude": -46.650859, "revenue": 22365.54 },
        { "name": "Brigadeiro Faria Lima", "city": "São Paulo", "state": "SP", "latitude": -23.572424, "longitude": -46.65384, "revenue": 17988.36 },
        { "name": "Brooklin", "city": "São Paulo", "state": "SP", "latitude": -23.610235, "longitude": -46.69591, "revenue": 12578.22 },
        { "name": "Brooklin 2", "city": "São Paulo", "state": "SP", "latitude": -23.609215, "longitude": -46.69753, "revenue": 12589.27 }
    ]
]

describe('Table Component', () => {
    // Render a checkbox with label in the document
    const table = mount(<TableComponent
        lojas={fakeobj.stores}
        todaslojas={fakeobj.stores}
        currentPage={0}
        splitedPages={splitedPages}
        minimumvalue={15000}
        sorteByName={()=>{return false}} // this function return false because she dispatch changes in the redux then in the test, she dont do this dispach
        sorteValue={()=>{return false}} // this function return false because she dispatch changes in the redux then in the test, she dont do this dispach
        changepage={(page)=>{ console.log(page) }} // this function return false because she dispatch changes in the redux then in the test, she dont do this dispach
    />);

    test('Render Component', () => {

        let component = renderer.create(
            <TableComponent
                lojas={fakeobj.stores}
                todaslojas={fakeobj.stores}
                currentPage={0}
                splitedPages={splitedPages}
                minimumvalue={15000}
            />
        )
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('Dom Clicks Sort By Name',() =>{
        table.find('a.lojaname').simulate('click');
        expect(table.state().directionName).toEqual('desc');
    })

    test('Dom Clicks Sort By Value',() =>{
        table.find('a.faturamento').simulate('click');
        expect(table.state().direction).toEqual('desc');
    })
})