import { CATEGORIES } from '../Actions/Types';

const filter = (state = [], action) => {
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

export default filter;
