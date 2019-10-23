import React, { useState } from 'react';

import '../scss/calculator-grid.scss';

function CalculatorGrid() {
  const numbers = [...Array(10).keys()];
  const [number, setNumber] = useState('');

  const handleClick = el => {
    const str = `${number}${el}`;
    setNumber(Number(str));
  };

  return (
    <div className="c-calculator">
      <input
        type="number"
        name="calculator-input"
        id="input"
        value={number || 0}
        onChange={evt => setNumber(evt.target.value)}
      />
      <div className="c-calculator__button-grid">
        {numbers.map(el => (
          <button key={el} onClick={() => handleClick(el)}>
            {el}
          </button>
        ))}
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default CalculatorGrid;
