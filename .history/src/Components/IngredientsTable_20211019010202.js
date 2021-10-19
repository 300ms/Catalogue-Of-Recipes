import PropTypes from 'prop-types';

const Table = ({ state }) => {
  const { recipeDetails } = state;
  return (
    <table>
      <tbody>
        <tr>
          <th>No</th>
          <th>Ingredients</th>
          <th>Measure</th>
        </tr>
        {recipeDetails.strIngredient1
          ? (
            <tr>
              <td>1</td>
              <td>{recipeDetails.strIngredient1}</td>
              <td>{recipeDetails.strMeasure1}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient2
          ? (
            <tr>
              <td>2</td>
              <td>{recipeDetails.strIngredient2}</td>
              <td>{recipeDetails.strMeasure2}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient3
          ? (
            <tr>
              <td>3</td>
              <td>{recipeDetails.strIngredient3}</td>
              <td>{recipeDetails.strMeasure3}</td>
            </tr>
          )
          : null}

        {recipeDetails.strIngredient4
          ? (
            <tr>
              <td>4</td>
              <td>{recipeDetails.strIngredient4}</td>
              <td>{recipeDetails.strMeasure4}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient5
          ? (
            <tr>
              <td>5</td>
              <td>{recipeDetails.strIngredient5}</td>
              <td>{recipeDetails.strMeasure5}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient6
          ? (
            <tr>
              <td>6</td>
              <td>{recipeDetails.strIngredient6}</td>
              <td>{recipeDetails.strMeasure6}</td>
            </tr>
          )
          : null}

        {recipeDetails.strIngredient7
          ? (
            <tr>
              <td>7</td>
              <td>{recipeDetails.strIngredient7}</td>
              <td>{recipeDetails.strMeasure7}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient8
          ? (
            <tr>
              <td>8</td>
              <td>{recipeDetails.strIngredient8}</td>
              <td>{recipeDetails.strMeasure8}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient9
          ? (
            <tr>
              <td>9</td>
              <td>{recipeDetails.strIngredient9}</td>
              <td>{recipeDetails.strMeasure9}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient10
          ? (
            <tr>
              <td>10</td>
              <td>{recipeDetails.strIngredient10}</td>
              <td>{recipeDetails.strMeasure10}</td>
            </tr>
          )
          : null}

        {recipeDetails.strIngredient11
          ? (
            <tr>
              <td>11</td>
              <td>{recipeDetails.strIngredient1}</td>
              <td>{recipeDetails.strMeasure1}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient12
          ? (
            <tr>
              <td>12</td>
              <td>{recipeDetails.strIngredient12}</td>
              <td>{recipeDetails.strMeasure12}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient13
          ? (
            <tr>
              <td>13</td>
              <td>{recipeDetails.strIngredient13}</td>
              <td>{recipeDetails.strMeasure13}</td>
            </tr>
          )
          : null}

        {recipeDetails.strIngredient14
          ? (
            <tr>
              <td>14</td>
              <td>{recipeDetails.strIngredient14}</td>
              <td>{recipeDetails.strMeasure14}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient15
          ? (
            <tr>
              <td>15</td>
              <td>{recipeDetails.strIngredient15}</td>
              <td>{recipeDetails.strMeasure15}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient16
          ? (
            <tr>
              <td>16</td>
              <td>{recipeDetails.strIngredient16}</td>
              <td>{recipeDetails.strMeasure16}</td>
            </tr>
          )
          : null}

        {recipeDetails.strIngredient17
          ? (
            <tr>
              <td>17</td>
              <td>{recipeDetails.strIngredient17}</td>
              <td>{recipeDetails.strMeasure17}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient18
          ? (
            <tr>
              <td>18</td>
              <td>{recipeDetails.strIngredient18}</td>
              <td>{recipeDetails.strMeasure18}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient19
          ? (
            <tr>
              <td>19</td>
              <td>{recipeDetails.strIngredient19}</td>
              <td>{recipeDetails.strMeasure19}</td>
            </tr>
          )
          : null}
        {recipeDetails.strIngredient20
          ? (
            <tr>
              <td>20</td>
              <td>{recipeDetails.strIngredient20}</td>
              <td>{recipeDetails.strMeasure20}</td>
            </tr>
          )
          : null}
      </tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  recipeDetails: PropTypes.instanceOf(Object).isRequired,
};
