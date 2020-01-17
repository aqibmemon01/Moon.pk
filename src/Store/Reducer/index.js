import {combineReducers} from 'redux';
import Reducer from './Reducer'
import DataReducer from './DataReducer'

export default combineReducers({
    MyReducer:Reducer,
    DataReducer:DataReducer
})
