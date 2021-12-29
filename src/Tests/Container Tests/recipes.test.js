import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import AllRecipes from '../../Containers/AllRecipes';
import store from '../../Reducers/Index';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const allRecipes = shallow(<Provider store={store}><AllRecipes /></Provider>);
  return allRecipes;
};

describe('Display nothing while loading', () => {
  let allRecipes;
  beforeEach(() => {
    allRecipes = setup();
  });

  it('No div elements', () => {
    expect(allRecipes.find('div').length).toBe(0);
  });

  it('No header elements', () => {
    expect(allRecipes.find('h1').length).toBe(0);
    expect(allRecipes.find('h2').length).toBe(0);
    expect(allRecipes.find('h3').length).toBe(0);
    expect(allRecipes.find('h4').length).toBe(0);
    expect(allRecipes.find('h5').length).toBe(0);
    expect(allRecipes.find('h6').length).toBe(0);
  });

  it('No span elements', () => {
    expect(allRecipes.find('span').length).toBe(0);
  });
});
