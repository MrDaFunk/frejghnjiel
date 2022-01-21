import CheckboxType from './Checkbox.enums';

interface Props {
	checked: boolean;
	type?: CheckboxType;
	onChange?: () => void;
	title?: string;
}

export default Props;
