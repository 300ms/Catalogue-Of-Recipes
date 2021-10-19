import React from 'react';
import Meal from '../Components/Meal';

const renderList = ({ state }) => {
  const mealList = state.meals;

  return (
    <div className="mealList">
      <div className="meal-wrapper">
        <div>
          {
              mealList.map((meal) => (
                <Meal
                  meal={meal}
                  key={meal.id}
                />
              ))
            }
        </div>
      </div>
    </div>
  );
};

const MealList = renderList;

export default MealList;
