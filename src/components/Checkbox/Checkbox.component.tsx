import { FC, memo } from 'react';

import Props from './Checkbox.interface';
import CheckboxType from './Checkbox.enums';

const Checkbox: FC<Props> = ({
	type = CheckboxType.CHECKBOX,
	checked = false,
	onChange,
	title,
}) => <input title={title} type={type} checked={checked} onChange={onChange} />;

export default memo(
	Checkbox,
	(prevProps, nextProps) => prevProps.checked === nextProps.checked
);
