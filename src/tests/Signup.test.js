import { render, screen } from "@testing-library/react";
import SignUp from '../components/Signup/Signup';

test("check empty inputs initially", () => {
	render(<SignUp />);
	const emailInput = screen.getByRole("textbox");
	expect(emailInput.value).toBe("");
	const passwordInput = screen.getByLabelText("password");
	expect(passwordInput.value).toBe("");
});
