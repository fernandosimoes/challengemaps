import { GET_STORE_SUCCESS, CHANGE_PAGE, CHANGE_MINIMUM_VALUE, FILTER_STORES, SORTED_TABLE_VALUE, SORTED_TABLE_BY_NAME } from '../actionstypes';

const initialState = {
  todaslojas: [],
  lojas: [],
  splitedPages: [],
  currentPage: 0,
  minimumvalue: 15000
}

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_STORE_SUCCESS:
      return { ...state, todaslojas: action.payload.stores, lojas: action.payload.stores};
    case CHANGE_PAGE:
      return { ...state, currentPage: action.payload};
    case CHANGE_MINIMUM_VALUE:
    console.log('aqui')
      return { ...state, minimumvalue: action.payload};
    case FILTER_STORES:

      return { ...state, lojas: action.payload, splitedPages: splitPages(action.payload)};
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
