import { EDIT_TIME } from './actions';
import { GREEN, RED, YELLOW } from '../../helpers/constants';

const defaultState = [
  { id: 0, label: 'last time departed', color: GREEN, timeItems: [] },
  { id: 0, label: 'present time', color: YELLOW, timeItems: [] },
  { id: 0, label: 'destination time', color: RED, timeItems: [] }
];

const timeRows = (state = defaultState, action) => {
  switch (action) {
    case EDIT_TIME:
      return Object.assign({}, state, {
        row: state.timeRows.map((row) => {
          if (row.id === action.id) {
            return Object.assign({}, row, {});
          }
        })
      });
    default:
      return state;
  }
};

export default timeRows;
