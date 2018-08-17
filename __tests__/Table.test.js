// Link.react.test.js
import React from 'react';
import { TableComponent } from '../src/js/components/Table';
import renderer from 'react-test-renderer';
import {configure, shallow, mount} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import {allstores, splitedPages} from './fakedata';

describe('Table Component', () => {
    // Render a checkbox with label in the document
    const table = mount(<TableComponent
        lojas={allstores.stores}
        todaslojas={allstores.stores}
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
                lojas={allstores.stores}
                todaslojas={allstores.stores}
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