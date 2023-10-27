import React, { useState } from 'react';
import './calstyle.css';

function App() {
  const [ersteNUM, setersteNUM] = useState('');
  const [zweiteNum, setzweiteNum] = useState('');
  const [operator, setOperator] = useState('');


  const res = (number) => {
    if (operator === '=') {
      setersteNUM('');
      setOperator('');
      setzweiteNum(number);
    } else {
      setzweiteNum(zweiteNum + number);
    }
  };

  const SUM = (op) => {
    if (zweiteNum !== '') {
      if (ersteNUM === '') {
        setersteNUM(zweiteNum);
        setzweiteNum('');
        setOperator(op);
      } else {
        setersteNUM(calculator());
        setzweiteNum('');
        setOperator(op);
      }
    }else{
      alert("you can't make double operator at the same time");
    }
  };
  

  const calculator = () => {
    const prev = parseFloat(ersteNUM);
    const current = parseFloat(zweiteNum);
    if(operator === '/' && current=== 0){
      alert("you can't divise by zero");
    }
    switch (operator) {
      case '+':
        return (prev + current).toString();
      case '-':
        return (prev - current).toString();
      case '*':
        return (prev * current).toString();
      case '/':
        if (current === 0) {
          return 'Error';
        }
        return (prev / current).toString();
      default:
        return zweiteNum;
    }
  };

  const Equal = () => {
    if (operator && zweiteNum !== '') {
      setzweiteNum(calculator());
      setersteNUM('');
      setOperator('=');
    }else{
      alert("you'd enter the second number");
    }
  };

  const Sup = () => {
    setersteNUM('');
    setzweiteNum('');
    setOperator('');
  };

  const handleDeleteClick = () => {
    setzweiteNum(zweiteNum.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="NUM">
        <div className="ersteNUM">{ersteNUM}</div>
        <div className="ZweiteNUM">{zweiteNum}</div>
      </div>

      <button onClick={Sup} className="lar">
        AC
      </button>
      <button onClick={handleDeleteClick}>DEL</button>
      <button onClick={() => SUM('/')}>/</button>

      <button onClick={() => res('1')}>1</button>
      <button onClick={() => res('2')}>2</button>
      <button onClick={() => res('3')}>3</button>
      <button onClick={() => SUM('*')}>*</button>

      <button onClick={() => res('4')}>4</button>
      <button onClick={() => res('5')}>5</button>
      <button onClick={() => res('6')}>6</button>
      <button onClick={() => SUM('+')}>+</button>


<button onClick={() => res('7')}>7</button>
<button onClick={() => res('8')}>8</button>
<button onClick={() => res('9')}>9</button>
<button onClick={() => SUM('-')}>-</button>


      <button onClick={() => res('.')}>.</button>
      <button onClick={() => res('0')}>0</button>
      <button onClick={Equal} className="lar">
        =
      </button>
      
    </div>
  );
}

export default App;
