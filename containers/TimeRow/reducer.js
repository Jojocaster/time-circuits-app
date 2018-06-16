import { EDIT_DISPLAY } from './actions';
import { generateDisplays } from '../../helpers/helpers';

const defaultDisplays = generateDisplays();

export const displays = (state = defaultDisplays, action) => {
  switch (action.type) {
    case EDIT_DISPLAY:
      const { display } = action;

      return state.map((item) => {
        if (item.title === display.title && item.rId === display.rId) {
          return { ...item, value: display.value };
        }

        return item;
      });
    default:
      return state;
  }
};
