import React from 'react';

import '../scss/calculator-grid.scss';

function CalculatorGrid() {
  return (
    <div className="c-calculator">
      <input type="number" name="calculator-input" id="input" />
      <div className="c-calculator__button-grid">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
    </div>
  );
}

export default CalculatorGrid;
