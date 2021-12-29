import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipeDetails from '../../Components/RecipeDescription';

const initial = {
  category: 'test',
  area: 'enzyme',
  ingredients: ['divs', 'spans'],
  className: 'recipe-description',
};

const {
  category, area, ingredients, className,
} = initial;

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const recipeDescriptionComponent = shallow(
    <RecipeDetails
      category={category}
      area={area}
      ingredients={ingredients}
      className={className}
    />,
  );
  return recipeDescriptionComponent;
};

describe('Create Component', () => {
  let recipeDescriptionComponent;
  beforeEach(() => {
    recipeDescriptionComponent = setup();
  });

  it('Contains only 1 div', () => {
    expect(recipeDescriptionComponent.find('div').length).toBe(1);
  });

  it('Contains 6 span elements', () => {
    expect(recipeDescriptionComponent.find('span').length).toBe(6);
  });
});
