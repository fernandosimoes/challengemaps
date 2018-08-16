import {
  GET_STORE_SUCCESS,
  CHANGE_PAGE,
  CHANGE_MINIMUM_VALUE,
  FILTER_STORES,
  SORTED_TABLE_VALUE,
  SORTED_TABLE_BY_NAME,
  FILTER_STORES_ON_MAP
} from '../actionstypes';

const initialState = {
  todaslojas: [],
  filtro: '',
  lojas: [],
  splitedPages: [],
  currentPage: 0,
  minimumvalue: 15000.00,
  pagesonmap: false
}

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_STORE_SUCCESS:
      return { ...state, todaslojas: action.payload.stores, lojas: action.payload.stores};
    case CHANGE_PAGE:
      return { ...state, currentPage: action.payload};
    case CHANGE_MINIMUM_VALUE:
      if(action.payload == "" ) {
        return { ...state, minimumvalue: 15000.00};
      }
      return { ...state, minimumvalue: action.payload};
    case FILTER_STORES:
      if(action.payload == "") {
        return { ...state, lojas: state.todaslojas, filtro: '', splitedPages: splitPages(state.todaslojas)};
      }

      const filtredStores = state.todaslojas.filter(function (elem, index, array) {
        if (String(elem.name).toLowerCase().includes(action.payload)) {
            return elem
        }
      });

      if(!filtredStores.length) {
        return { ...state, lojas: [], filtro: action.payload};
      }
      return { ...state, lojas: filtredStores, filtro: action.payload, splitedPages: splitPages(filtredStores)};
    case FILTER_STORES_ON_MAP:
      return { ...state, pagesonmap: action.payload};
    case SORTED_TABLE_VALUE:
      return { ...state, lojas: action.payload, splitedPages: splitPages(action.payload)};
    case SORTED_TABLE_BY_NAME:
      return { ...state, lojas: action.payload, splitedPages: splitPages(action.payload)};
    default:
      return state
    }
};


const splitPages = (lojas) => {
  var groups = [], i;
  for (i = 0; i < lojas.length; i += 10) {
    groups.push(lojas.slice(i, i + 10));
  }
  return groups;
}
