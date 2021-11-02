import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CategoryList = ({ state, handleClick }) => {
  console.log('asfasdasfasd');
  console.log(state.categories);
  const { categories } = state.categories;
  return (
    categories.map((category) => (
      <button type="button" onClick={() => handleClick(category.strCategory)} key={category.idCategory} className="cat-item">
        <div className="category">
          <img src={category.strCategoryThumb} alt="Category" />
          <div className="cat-name tooltip">
            {category.strCategory}
            <span className="category-desc tooltiptext">{category.strCategoryDescription}</span>
          </div>
        </div>
      </button>
    ))
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(CategoryList);

CategoryList.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
};
