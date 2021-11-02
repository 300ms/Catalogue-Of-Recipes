import { CATEGORIES } from '../Actions/Types';

const categoriesReducer = (state = [], action) => {
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

export default categoriesReducer;
