import { FC } from 'react';

import { Form as FormEvent } from '../../interfaces/event';

import Props from './Form.interface';

const Form: FC<Props> = ({ onSubmit, noValidate = true, children }) => {
	const onSubmitValidation = (event: FormEvent) => {
		event.preventDefault();

		onSubmit();
	};

	return (
		<form noValidate={noValidate} onSubmit={onSubmitValidation}>
			{children}
		</form>
	);
};

export default Form;
