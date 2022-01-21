import InputType from '../../enums/input';
import { InputVariant } from '../../enums/variant';

import { Focus as FocusEvent, Change as ChangeEvent } from '../../interfaces/event';

interface Props {
	id?: string;
	value?: string;
	type?: InputType;
	variant?: InputVariant;
	label?: string;
	error?: string;
	autoFocus?: boolean;
	required?: boolean;
	helperText?: string;
	validation?: 'email';
	onChange?: ((event: ChangeEvent) => void) | null;
	onBlur?: ((event: FocusEvent) => void) | null;
}

export default Props;
