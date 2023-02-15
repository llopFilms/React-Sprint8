import { render, screen } from "@testing-library/react";
import axios from "axios";
import { ENDPOINTSAPI } from "../../../lib/constants/endPointsAPI";
import { EstructuraApp } from "../../../lib/utils/estructuraApp";
import { fetchAPI } from "../../../lib/utils/fetchAPI";
import LlistaStarships from "../LlistaStarships";

jest.mock("axios");

beforeAll(() => {
	console.log("Inici tests LlistaStarships");
});

describe("Starships testing", () => {
	const MockStarships = () =>
		render(<EstructuraApp component={<LlistaStarships />} />);
	afterEach(() => axios.get.mockClear());

	test("Comprovació del renderitzat dels avisos de càrrega de dades", () => {
		MockStarships();
		expect(screen.getByText(/loading data/i)).toBeInTheDocument();
	});

	/* test("Comprovació del renderitzat del primer element de la llista de naus", async () => {
		expect(await screen.findByTestId("starship-0")).toBeInTheDocument();
	}); */

	/* test("Comprovació del renderitzat de les dades", async () => {
		const mockStarship = {
			data: {
				results: [
					{
						name: "CR90 corvette",
					},
				],
			},
		};
		axios.get.mockResolvedValueOnce(mockStarship);
		expect(axios.get).toHaveBeenCalledWith(ENDPOINTSAPI.starships);
		const resultat = await fetchAPI();
		expect(resultat).toEqual(mockStarship);
		expect(await screen.findByText(/CR90 corvette/i)).toBeInTheDocument();
	}); */

	/* test("Comprovació del renderitzat del botó 'view more'", async () => {
		const button = await screen.findByRole("button");
		expect (button).toBeTruthy();
	}); */
});
