import {
  CATEGORIES,
} from '../Actions/Types';

const categories = (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default categories;
