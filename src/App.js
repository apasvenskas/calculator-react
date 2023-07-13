import React, { useReducer } from 'react';
import DigiButton from './DigitButton';
import OperationButton from './OperationButton';
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
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
         return state
      }
      return {
        ...state,
        currentOperand: `${currentOperand || "" }${payload.digit}`,
      }
      case ACTIONS.CHOOSE_OPERATION:
        if(state.currentOperand == null && state.previousOperand == null) {
          return state; 
        }
        if (state.previousOperand == null) {
          return {
            ...state,
            operation: payload.operation,
            previousOperand: state.currentOperand,
            currentOperand: null,
          }
        }
      case ACTIONS.CLEAR:
        return {}
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
    <button className='large' onClick={() => dispatch({ type: ACTIONS.CLEAR })} >AC</button>
    <OperationButton operation='DEL' dispatch={dispatch} />
    <OperationButton operation='➗' dispatch={dispatch} />
    <DigiButton digit='1' dispatch={dispatch} />
    <DigiButton digit='2' dispatch={dispatch} />
    <DigiButton digit='3' dispatch={dispatch} />
    <OperationButton operation='∗' dispatch={dispatch} />
    <DigiButton digit='4' dispatch={dispatch} />
    <DigiButton digit='5' dispatch={dispatch} />
    <DigiButton digit='6' dispatch={dispatch} />
    <OperationButton operation='➕' dispatch={dispatch} />
    <DigiButton digit='7' dispatch={dispatch} />
    <DigiButton digit='8' dispatch={dispatch} />
    <DigiButton digit='9' dispatch={dispatch} />
    <OperationButton operation='➖' dispatch={dispatch} />
    <DigiButton digit='.' dispatch={dispatch} />
    <DigiButton digit='0' dispatch={dispatch} />
    <button className='large'>=</button>
  </div>
  )
}
export default App;
