// useReducer
import { useReducer } from "react";

interface AppState {
    value1: number;
    value2: number;
}

type IncrementValue1 = { type: 'incrementValue1' };
type IncrementValue2 = { type: 'incrementValue2', payload: number };
type AppAction = IncrementValue1 | IncrementValue2

export function appReducer(state: AppState, action:AppAction) {
    console.log('reducer', state, action)
    switch (action.type) {
        case 'incrementValue1':
            return { ...state, value1: state.value1 + 1 }
        case 'incrementValue2':
            return { ...state, value2: state.value2 - action.payload }
    }
    return state;
}

export const Demo4 = () => {
    const [state, dispatch] = useReducer(appReducer, { value1: 0, value2: 0 } );
    return (
        <div>
            <h3>Container {state.value1}</h3>
            <button onClick={() => dispatch({ type:'incrementValue1' })}>{state.value1}</button>
            <button onClick={() => dispatch({ type:'incrementValue2', payload: 2 })}>{state.value2}</button>
        </div>
    );
}
