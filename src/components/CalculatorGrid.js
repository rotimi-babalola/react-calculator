import React, { useState } from 'react';
import { evaluate } from 'mathjs';

import '../scss/calculator-grid.scss';

function CalculatorGrid() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [inputValue, setInputValue] = useState('');

  const handleClick = el => {
    const str = `${inputValue}${el}`;
    setInputValue(str);
  };

  const getResult = () => {
    try {
      const result = evaluate(inputValue);
      setInputValue(result);
    } catch (error) {
      console.log(error);
      alert('Invalid input');
    }
  };

  return (
    <div className="c-calculator">
      <input
        type="text"
        name="calculator-input"
        id="input"
        value={inputValue || 0}
        onChange={evt => setInputValue(evt.target.value)}
      />
      <div className="c-calculator__button-grid">
        {numbers.map(el => (
          <button key={el} onClick={() => handleClick(el)}>
            {el}
          </button>
        ))}
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => setInputValue('')}>C</button>
        <button
          className="c-calculator__button-grid--equal"
          onClick={() => getResult()}
        >
          =
        </button>
        <button onClick={() => setInputValue(inputValue.slice(0, -1))}>
          ⬅
        </button>
      </div>
    </div>
  );
}

export default CalculatorGrid;
