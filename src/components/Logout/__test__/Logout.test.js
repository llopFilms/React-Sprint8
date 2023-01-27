import { render, screen } from "@testing-library/react";
import { EstructuraApp } from "../../../lib/utils/estructuraApp";
import Logout from "../Logout";

beforeAll(() => {
	console.log("Inici tests Logout");
});

describe("Logout testing", () => {
	const MockLogout = () => render(<EstructuraApp component={<Logout />} />);

	test("Comprovació del renderitzat de misstage de logout", () => {
		MockLogout();
		expect(screen.getByText(/logged out/i)).toBeInTheDocument();
	});
});
