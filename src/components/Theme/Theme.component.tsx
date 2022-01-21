import { FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { useState } from '../../store/State';

import Color from '../../enums/color';

const Theme: FC = ({ children }) => {
	const {
		config: { isDarkmodeOn },
	} = useState();

	const theme = createTheme({
		palette: {
			mode: isDarkmodeOn ? 'dark' : 'light',
			[Color.PRIMARY]: {
				main: '#28a745',
			},
		},
	});

	// theme.palette.type = 'light';

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
		</ThemeProvider>
	);
};

export default Theme;
