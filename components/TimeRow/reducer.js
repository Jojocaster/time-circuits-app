import { EDIT_DISPLAY } from './actions';
import { generateDisplays } from '../../helpers/helpers';

const defaultDisplays = generateDisplays();

export const displays = (state = defaultDisplays, action) => {
  switch (action) {
    case EDIT_DISPLAY:
      const { display } = action;

      return Object.assign({}, state, {
        displays: state.map((item) => {
          if (item.title === display.title && item.rId === display.rId) {
            return Object.assign({}, item, {
              value: display.value
            });
          }
        })
      });
    default:
      return state;
  }
};
