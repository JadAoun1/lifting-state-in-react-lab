// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ ingredients, onRemove }) => {
  return (
    <ul className="burger-stack">
      {ingredients.map((ingredient, index) => (
        <li 
          key={index}
          style={{ backgroundColor: ingredient.color }}
          className="stack-item"
        >
          {ingredient.name}
          <button 
            onClick={() => onRemove(index)}
            className="remove-button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
  