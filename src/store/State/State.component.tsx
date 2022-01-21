import { useReducer, Dispatch, createContext, useContext, FC } from 'react';

import { INITIAL_STATE } from './State.constants';
import { State as StateType, Action } from './State.interface';

import reducer from '../reducer';

const StateContext = createContext<StateType>(INITIAL_STATE);
const DispatchContext = createContext<Dispatch<Action>>(() => {});

const useState = (): StateType => useContext(StateContext);
const useDispatch = (): Dispatch<Action> => useContext(DispatchContext);

const State: FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

export { State as default, useState, useDispatch };
