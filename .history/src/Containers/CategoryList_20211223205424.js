import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CategoryList = ({ state, handleChange }) => {
  const { categories } = state;
  return (
    <select onChange={handleChange}>
      {categories.map((category) => (
        <option value={category.strCategory} key={category.idCategory} className="cat-item">
          {category.strCategory}
        </option>
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
