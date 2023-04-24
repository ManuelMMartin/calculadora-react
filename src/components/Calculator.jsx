import { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (e) => {
    const value = e.target.getAttribute('data-value');

    switch (value) {
      case 'clear':
        setDisplayValue('0');
        break;
      case 'equals':
        try {
          const result = eval(displayValue);
          setDisplayValue(result.toString());
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      default:
        const newDisplayValue = displayValue === '0' ? value : displayValue + value;
        setDisplayValue(newDisplayValue);
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="btn-container">
        <button className='btn' onClick={handleClick} data-value="7">7</button>
        <button className='btn' onClick={handleClick} data-value="8">8</button>
        <button className='btn' onClick={handleClick} data-value="9">9</button>
        <button className="btn operator" onClick={handleClick} data-value="/">÷</button>
        <button className='btn' onClick={handleClick} data-value="4">4</button>
        <button className='btn' onClick={handleClick} data-value="5">5</button>
        <button className='btn' onClick={handleClick} data-value="6">6</button>
        <button className="btn operator" onClick={handleClick} data-value="+">+</button>
        <button className='btn' onClick={handleClick} data-value="1">1</button>
        <button className='btn' onClick={handleClick} data-value="2">2</button>
        <button className='btn' onClick={handleClick} data-value="3">3</button>
        <button className="btn operator" onClick={handleClick} data-value="-">-</button>
        <button className="btn clear" onClick={handleClick} data-value="clear">AC</button>
        <button className='btn' onClick={handleClick} data-value="0">0</button>
        <button className='btn' onClick={handleClick} data-value=".">,</button>
        <button className="btn operator" onClick={handleClick} data-value="*">×</button>
        <button className="btn equals" onClick={handleClick} data-value="equals">=</button>
      </div>
    </div>
  );
}

export default Calculator;
