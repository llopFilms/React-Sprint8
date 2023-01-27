import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EstructuraApp } from "../../../lib/utils/estructuraApp";
import Benvinguda from "../Benvinguda";

beforeAll(() => {
	console.log("Inici tests Benvinguda");
});

describe("Benvinguda testing", () => {
	const MockBenvinguda = () =>
		render(<EstructuraApp component={<Benvinguda />} />);

	test("Comprovar que es renderitzen 2 titulars", () => {
		MockBenvinguda();
		expect(screen.getAllByRole("heading").length).toBe(2);
	});

	test("Comprovar que es renderitzen els elements de text", () => {
		MockBenvinguda();
		expect(
			screen.getByRole("heading", { name: /welcome/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: /greetings/i })
		).toBeInTheDocument();
		expect(
			screen.getByText(/starships are space vehicles/i)
		).toBeInTheDocument();
		expect(screen.getByText(/We hope you enjoy/i)).toBeInTheDocument();
	});

	test("Comprovar que es renderitza la imatge", () => {
		MockBenvinguda();
		expect(screen.getByRole("img")).toBeInTheDocument();
		expect(screen.getByAltText(/starship benvinguda/i)).toBeInTheDocument();
	});

	test("Comprovar que es renderitza el botó i l'enllaç a 'starships'", () => {
		MockBenvinguda();
		expect(screen.getByRole("link")).toHaveClass("link");
		expect(screen.getByRole("link")).toContainHTML("button");
		expect(
			screen.getByRole("button", { name: "starships" })
		).toBeInTheDocument();
	});

	test("Comprovar que l'enllaç a 'starships' actua i fa desaparèixer el botó", async () => {
		MockBenvinguda();
		const botoStarships = screen.getByRole("link", { name: "starships" });
		userEvent.click(botoStarships);
		expect(await screen.botoStarships).not.toBeTruthy();
	});
});
