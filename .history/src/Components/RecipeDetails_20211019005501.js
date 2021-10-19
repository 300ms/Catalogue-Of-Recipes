const RecipeDetails = (state) => {
  const { recipeDetails } = state;
  return (
    <div className="detail-con">
      <h1>{recipeDetails.strMeal}</h1>
      <div className="detail-main flex">
        <div className="d-img">
          <iframe src={`https://www.youtube.com/embed/${recipeDetails.strYoutube.split('=')[1]}`} title={recipeDetails.strCategory} />
          <img src={recipeDetails.strMealThumb} alt="Meal" />
        </div>
        <div className="instructions">
          <h2>How to prepare?</h2>
          <p>{recipeDetails.strInstructions}</p>
          <div className="d-paragraph">
            <span className="d-title">Category:</span>
            {' '}
            {recipeDetails.strCategory}
          </div>
          <div className="d-paragraph">
            <span className="d-title">Origin:</span>
            {' '}
            {recipeDetails.strArea}
          </div>
          <div className="d-paragraph">
            <span className="d-title">#Tags:</span>
            {' '}
            {recipeDetails.strTags}
          </div>
          <div className="d-paragraph">
            <span className="d-title">Link</span>
            {' '}
            to the
            {' '}
            <a href={recipeDetails.strSource}>Source</a>
          </div>
        </div>
      </div>

      <h1 className="d-table">Ingredients</h1>
      <Table recipeDetails={recipeDetails} />
    </div>
  );
};

export default RecipeDetails;
