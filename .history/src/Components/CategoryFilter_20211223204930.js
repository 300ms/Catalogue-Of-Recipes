import PropTypes from 'prop-types';
import CategoryList from '../Containers/CategoryList';

const CategoryFilter = ({ handleChange }) => (
  <>
    <h1 className="">Categories</h1>
    <div className="category-list-container">
      <CategoryList handleChange={handleChange} />
    </div>
  </>
);

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
