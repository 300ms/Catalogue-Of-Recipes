import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CategoryList = ({ state, handleChange }) => {
  const { categories } = state;
  return (
    <select onChange={handleChange}>
      { categories.map((category) => (
        <button type="button" onClick={() => handleChange(category.strCategory)} key={category.idCategory} className="cat-item">
          <div className="category">
            {category.strCategory}
            {/* <img src={category.strCategoryThumb} alt="Category" />
          <div className="cat-name tooltip">
            <span className="category-desc tooltiptext">{category.strCategoryDescription}</span>
          </div> */}
          </div>
        </button>
      ))}
    </select>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(CategoryList);

CategoryList.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
};
