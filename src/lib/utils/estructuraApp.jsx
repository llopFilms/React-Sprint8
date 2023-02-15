import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../constants/theme';
import AutenticacioContextProvider from '../../context/autentitcacioContext';

export const EstructuraApp = ({ component }) => (
	<BrowserRouter>
		<ThemeProvider theme={THEME}>
			<AutenticacioContextProvider>{component}</AutenticacioContextProvider>
		</ThemeProvider>
	</BrowserRouter>
);
