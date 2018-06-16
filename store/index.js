import { combineReducers, createStore } from 'redux';
import { rows } from '../containers/DashboardScreen/reducer';
import { displays } from '../components/TimeRow/reducer';

const reducers = combineReducers({ rows, displays });

export const store = createStore(reducers);
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
