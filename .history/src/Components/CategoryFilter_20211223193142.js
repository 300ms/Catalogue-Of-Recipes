import PropTypes from 'prop-types';
import CategoryList from '../Containers/CategoryList';

const CategoryFilter = ({ handleClick }) => (
  <>
    <h1 className="">Categories</h1>
    <div className="category-list-container">
      <CategoryList handleClick={handleClick} />
    </div>
  </>
);

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
