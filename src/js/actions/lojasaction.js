import {
  GET_STORE_SUCCESS,
  CHANGE_PAGE,
  CHANGE_MINIMUM_VALUE,
  FILTER_STORES,
  SORTED_TABLE_VALUE,
  SORTED_TABLE_BY_NAME,
  FILTER_STORES_ON_MAP
} from '../actionstypes';
import {
  lojas
} from '../resources/lojasapi';

export const getlojas = () => {
  return (dispatch, state) => {
    return lojas().then((result) => {
      dispatch(sorteByName('asc', result.stores));
      dispatch({
        type: GET_STORE_SUCCESS,
        payload: result
      })
      if(state().filtro) {
        dispatch(filterstores(state().filtro));
      }
    })
  }
}

export const changepage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page
  }
}
export const changeminimumvalue = (value) => {
  return {
    type: CHANGE_MINIMUM_VALUE,
    payload: value
  }
}

export const filterstores = (value) => {

  return {
    type: FILTER_STORES,
    payload: value
  }
}

export const showPageStoreonMap = (value) => {

  return {
    type: FILTER_STORES_ON_MAP,
    payload: value
  }
}


export const sorteValue = (sorteValue) => {

  return {
    type: SORTED_TABLE_VALUE,
    payload: sorteValue
  }
}

export const sorteByName = (direction, lojas) => {
  const groupedByName = lojas.sort((a, b) => {
    if (direction === 'desc') {
      return b.name.localeCompare(a.name);
    } else {
      return a.name.localeCompare(b.name);
    }
  })
  return {
    type: SORTED_TABLE_BY_NAME,
    payload: groupedByName
  }
}