interface Action {
	type: string;
	payload?: boolean;
}

interface State {
	isLoading: boolean;
	isDarkmodeOn: boolean | null;
}

export type { Action, State };
