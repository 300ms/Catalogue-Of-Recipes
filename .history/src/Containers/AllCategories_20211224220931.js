import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CategoryList = ({ state, handleClick }) => {
  const { categories } = state;
  return (
    categories.map((category) => (
      <button type="button" onClick={() => handleClick(category.strCategory)} key={category.idCategory} className="cat-item">
        <div className="category">
          {category.strCategory}
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
