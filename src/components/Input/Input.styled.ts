import styled from 'styled-components';

import MaterialInput from '@mui/material/TextField';

const Input = styled(MaterialInput)`
	display: flex !important;

	& > label {
		top: 7px;
	}

	& > div {
		border-radius: 1em;
	}

	& input {
		border-radius: 5rem !important;
	}
`;

export default Input;
