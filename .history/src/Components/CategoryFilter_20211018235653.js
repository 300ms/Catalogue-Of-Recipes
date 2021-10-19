import PropTypes from 'prop-types';
import MapCategories from '../Containers/CategoryList';

const CategoryFilter = ({ handleClick }) => (
  <>
    <h1 className="">Categories</h1>
    <div className="">
      <MapCategories handleClick={handleClick} />
    </div>
  </>
);

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
