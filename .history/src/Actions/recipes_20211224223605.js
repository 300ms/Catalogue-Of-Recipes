import {
  getRecipesSuccess,
  getRecipesError,
} from './index';

function fetchAllMeals(type) {
  return (dispatch) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw (response.error);
        }
        dispatch(getRecipesSuccess(response.meals));
      })
      .catch((error) => {
        dispatch(getRecipesError(error));
      });
  };
}

export default fetchAllMeals;
