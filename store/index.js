import { combineReducers, createStore } from 'redux';
import { rows, displays } from '../containers/DashboardScreen/reducer';

const reducers = combineReducers({ rows, displays });

export const store = createStore(reducers);
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
