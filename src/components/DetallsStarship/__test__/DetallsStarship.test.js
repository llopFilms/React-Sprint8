import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { EstructuraApp } from "../../../lib/utils/estructuraApp";
import DetallsStarship from "../DetallsStarship";

jest.mock("axios");

beforeAll(() => {
	console.log("Inici tests DetallsStarship");
});

describe("Starship testing", () => {
	const MockStarship = () => render(<EstructuraApp component={<DetallsStarship />} />);
	afterEach(() => axios.get.mockClear());

	test("Comprovació del renderitzat dels avisos de càrrega de dades", () => {
		MockStarship();
		expect(screen.getByText(/loading data/i)).toBeInTheDocument();
		expect(screen.getByText(/loading image/i)).toBeInTheDocument();
	});

	test("Comprovar que es renderitza el botó i link a 'starships'", async () => {
		MockStarship();
		expect(
			await screen.findByRole("button", { name: "starships" })
		).toBeTruthy();
		expect(await screen.findByRole("link", { name: "starships" })).toBeTruthy();
	});

	test("Comprovar que l'enllaç a 'starships' actua", async () => {
		MockStarship();
		const botoStarships = await screen.findByRole("link", {
			name: "starships",
		});
		expect(botoStarships).toBeTruthy();
		userEvent.click(botoStarships);
		expect(await screen.findByText("starships")).toBeTruthy();
	});
});
