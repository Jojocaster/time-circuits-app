import {
  GREEN,
  RED,
  YELLOW,
  OUT_OF_SYNC,
  IN_SYNC
} from '../../helpers/constants';
import { EDIT_DISPLAY } from '../TimeRow/actions';

const defaultState = [
  { id: 0, label: 'last time departed', color: GREEN, sync: IN_SYNC },
  { id: 1, label: 'present time', color: YELLOW, sync: OUT_OF_SYNC },
  { id: 2, label: 'destination time', color: RED, sync: OUT_OF_SYNC }
];

export const rows = (state = defaultState, action) => {
  switch (action.type) {
    case EDIT_DISPLAY:
      const { rId } = action.display;

      return state.map((row) => {
        if (row.id === rId) {
          return {
            ...row,
            sync: OUT_OF_SYNC
          };
        }

        return row;
      });
    default:
      return state;
  }
};
