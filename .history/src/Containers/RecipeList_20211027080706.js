import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RecipeList = ({ state, clickOnRecipeDetail }) => {
  const { recipes } = state;
  return (
    recipes.map((recipe) => (
      <Link
        to={{
          pathname: `/detail/${recipe.idMeal}`,
          state: recipe,
        }}
        key={recipe.idMeal}
        className="meal"
        onClick={() => clickOnRecipeDetail(recipe.idMeal)}
      >
        <div className="img-container">
          <img src={recipe.strMealThumb} alt="Meal" />
        </div>
        <h3>{recipe.strMeal}</h3>
      </Link>
    ))
  );
};
const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(RecipeList);

RecipeList.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
};
