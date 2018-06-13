import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import candidates from '../reducers/candidates';

export default combineReducers({
    routing: routerReducer,
    candidates
});