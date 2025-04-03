// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <li 
          key={index}
          style={{ backgroundColor: ingredient.color }}
          className="ingredient-item"
        >
          {ingredient.name}
          <button 
            onClick={() => onAdd(ingredient)}
            className="add-button"
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
  