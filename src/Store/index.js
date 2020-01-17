import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import MyReducer from './Reducer/index'
const store = createStore(
     MyReducer,
    {},
    applyMiddleware(thunk)
)

export default store;
