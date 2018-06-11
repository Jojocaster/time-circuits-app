import { combineReducers, createStore } from 'redux';
import { timeCircuits } from '../containers/DashboardScreen/reducer';

const reducers = combineReducers({ timeCircuits });

export const store = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState());
});
