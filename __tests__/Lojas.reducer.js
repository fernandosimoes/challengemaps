import {
  GET_STORE_SUCCESS,
  CHANGE_PAGE,
  CHANGE_MINIMUM_VALUE,
  FILTER_STORES,
  SORTED_TABLE_VALUE,
  SORTED_TABLE_BY_NAME,
  FILTER_STORES_ON_MAP
} from '../src/js/actionstypes';
import {
  lojas
} from '../src/js/resources/lojasapi';
import {

  getlojas,
  changepage,
  changeminimumvalue,
  filterstores,
  showPageStoreonMap,
  sorteValue,
  sorteByName,
} from '../src/js/actions/lojasaction';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



import {allstores, splitedPages} from '../fakedata';

import lojasreducer from '../src/js/reducers/lojas';

describe('Testing functions from file Lojas action', () => {
  let store = {};
  beforeEach(() => {
    fetchMock.reset();
    fetchMock.restore();
    store = mockStore({
      todaslojas: [],
      filtro: '',
      lojas: [],
      splitedPages: [],
      currentPage: 0,
      minimumvalue: 15000.00,
      pagesonmap: false
    })
  })
  test('Store reducer functions', () => {
    const expectedActions = [
      { type: SORTED_TABLE_BY_NAME },
      { type: GET_STORE_SUCCESS }
    ]
    // storereducer(initialState, {action:GET_STORE_SUCCESS, payload: '' });
    store.dispatch(getlojas()).then(() => {
      // console.log(store.getActions());
      expect(store.getActions().map(action => action.type)).toEqual(expectedActions.map(expectedaction => expectedaction.type))
      store.getActions().forEach(action => {
        expect(lojasreducer(store.getState(), action)).not.toEqual(store.getState());
      })
    });

  })
  test('Change page reducer function', () => {
    let page = 2;
    const firstcall = store.dispatch(changepage(page))
    expect(lojasreducer(store.getState(), firstcall)).not.toEqual(store.getState());
    page = 0;
    const secondcall = store.dispatch(changepage(page));
    const retornoreducer = lojasreducer(store.getState(), secondcall)
    expect(retornoreducer.currentPage).not.toEqual(firstcall.payload);
  })
  test('Change Minimum value reducer funtcion', () => {
    let value = 1000;
    const firstcall = store.dispatch(changeminimumvalue(value))
    expect(lojasreducer(store.getState(), firstcall)).not.toEqual(store.getState());
    value = 27000;
    const secondcall = store.dispatch(changeminimumvalue(value));
    const retornoreducer = lojasreducer(store.getState(), secondcall)
    expect(retornoreducer.minimumvalue).not.toEqual(firstcall.payload);
  })
  test('Filtrar Lojas', () => {
    store = mockStore({
      todaslojas: allstores.stores,
      filtro: '',
      lojas: allstores.stores,
      splitedPages: splitedPages,
      currentPage: 0,
      minimumvalue: 15000.00,
      pagesonmap: false
    })
    let value = 'Alameda';
    const firstcall = store.dispatch(filterstores(value))
    expect(lojasreducer(store.getState(), firstcall).lojas.length).toEqual(1);
    value = '';
    expect(lojasreducer(store.getState(), firstcall).lojas.length).toBeGreaterThanOrEqual(1);
  })
})