import { render, screen } from '@testing-library/react';
import Benvinguda from './Benvinguda';

test("first word in welcome page", () => {
	render(<Benvinguda />);
	const primeraParaula = screen.getByText(/welcome/i);
	expect(primeraParaula).toBeInTheDocument();
});

