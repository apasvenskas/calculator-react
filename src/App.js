import React, { useReducer } from 'react';
import './App.css';

function reducer(state, {type, payload}){

}

function App() {
  const [{ currentOperaend, previousOperaend, operation}, dispatch] = useReducer(reducer, {})
  return (
  <div className='calculator'>
    <div className='display'>
      <div className='previous-operaend'>{previousOperaend} {operation} </div>
      <div className='current-operaend'> {currentOperaend} </div>
    </div>
    <button className='large'>AC</button>
    <button>DEL</button>
    <button>➗</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>∗</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>➕</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>➖</button>
    <button>.</button>
    <button>0</button>
    <button className='large' >=</button>
  </div>
  )
}
export default App;
