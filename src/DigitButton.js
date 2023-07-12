import { ACTIONS } from "./App"

// add functionality to the digit buttons. 
export default function DigiButton ({ dispatch, digit }) {
    return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}> {digit} </button>
}