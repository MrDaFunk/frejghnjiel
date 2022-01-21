import styled from 'styled-components';

import CircularProgress from '@mui/material/CircularProgress';

import Props from './Loading.interface';

const Container = styled.div<Props>`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${({ fullHeight }) => (fullHeight ? '100vh' : 'auto')};
`;

const MaterialLoading = styled(CircularProgress)``;

export { MaterialLoading as Loading, Container };
