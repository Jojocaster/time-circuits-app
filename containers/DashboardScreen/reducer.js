import { EDIT_TIME } from './actions';
import { generateDisplays } from '../../helpers/helpers';
import { GREEN, RED, YELLOW } from '../../helpers/constants';

const defaultState = [
  { id: 0, label: 'last time departed', color: GREEN },
  { id: 1, label: 'present time', color: YELLOW },
  { id: 2, label: 'destination time', color: RED }
];

const defaultDisplays = generateDisplays();

export const rows = (state = defaultState, action) => {
  switch (action) {
    default:
      return state;
  }
};

export const displays = (state = defaultDisplays, action) => {
  switch (action) {
    case EDIT_TIME:
      const { item } = action;

      return state.map(({ rId, title }) => {
        if (title === item.title && rId === item.rId) {
          return item;
        }
      });
    default:
      return state;
  }
};
