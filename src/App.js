import React, { useReducer } from 'react';
import DigiButton from './DigitButton';
import './App.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
}

let currentOperand = "";

function reducer(state, {type, payload}){
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || "" }${payload.digit}`,
      }
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
 
  return (
  <div className='calculator'>
    <div className='display'>
      <div className='previous-operaend'>{previousOperand} {operation} </div>
      <div className='current-operaend'> {currentOperand} </div>
    </div>
    <button className='large'>AC</button>
    <button>DEL</button>
    <button>➗</button>
    <DigiButton digit='1' dispatch={dispatch} />
    <DigiButton digit='2' dispatch={dispatch} />
    <DigiButton digit='3' dispatch={dispatch} />
    <button>∗</button>
    <DigiButton digit='4' dispatch={dispatch} />
    <DigiButton digit='5' dispatch={dispatch} />
    <DigiButton digit='6' dispatch={dispatch} />
    <button>➕</button>
    <DigiButton digit='7' dispatch={dispatch} />
    <DigiButton digit='8' dispatch={dispatch} />
    <DigiButton digit='9' dispatch={dispatch} />
    <button>➖</button>
    <button>.</button>
    <DigiButton digit='0' dispatch={dispatch} />
    <button className='large' >=</button>
  </div>
  )
}
export default App;
