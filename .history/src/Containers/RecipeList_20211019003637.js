import { Link } from 'react-router-dom';

const RecipeList = ({ recipes, clickOnRecipeDetail }) => (
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

export default RecipeList;
