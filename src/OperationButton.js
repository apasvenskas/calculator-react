import { ACTIONS } from "./App"

// add functionality to the digit buttons. 
export default function OperationButton ({ dispatch, operation }) {
    return <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}> {operation} </button>
}