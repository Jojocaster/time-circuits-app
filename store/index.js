import { combineReducers ,createStore } from 'redux';
import timeRows from '../containers/DashboardScreen/reducers';

const reducers = combineReducers({timeRows})

export const store = createStore(reducers);
