import { THEME } from "./lib/constants/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles/GlobalStyles";
import Capçalera from "./components/Capçalera/Capçalera";
import Navegador from "./components/Navegador/Navegador";
import Footer from "./components/Footer/Footer";
import AutenticacioContextProvider from "./context/AutentitcacioContext";
import Router from './Router/Router';

const App = () => (
		<ThemeProvider theme={THEME}>
			<GlobalStyles />
			<AutenticacioContextProvider>
				<header>
					<Capçalera />
					<Navegador />
				</header>
				<main>
					<Router />
				</main>
				<footer>
					<Footer />
				</footer>
			</AutenticacioContextProvider>
		</ThemeProvider>
	);

export default App;
