import { combineReducers, createStore } from 'redux';
import { timeCircuits } from '../containers/DashboardScreen/reducer';

const reducers = combineReducers({ timeCircuits });

export const store = createStore(reducers);
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});
