import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import lojasreducer from './lojas';

export default function configureStore(preloadedState) {
    return createStore(
        lojasreducer,
        applyMiddleware(
            thunkMiddleware,
        )
    )
}
// this way we can acess the store where was necessary
//  store = configureStore();