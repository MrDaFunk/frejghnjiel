interface Action {
	type: string;
	payload?: string;
}

interface State {
	hasSession: boolean;
}

export type { Action, State };
