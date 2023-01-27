import { render, screen } from "@testing-library/react";
import { eventTests } from "../../../lib/utils/eventTests";
import {
	errorUsuari,
	errorClaudePas,
} from "../../../lib/constants/validateSchema";
import { EstructuraApp } from "../../../lib/utils/estructuraApp";
import Login from "../Login";

beforeAll(() => {
	console.log("Inici tests Login");
});

describe("Login testing", () => {
	describe("Tests de valors inicials", () => {
		const MockLogin = () => render(<EstructuraApp component={<Login />} />);
		MockLogin();
		test("Comprovar inputs buits a l'inici", () => {
			expect(screen.getByRole("textbox", { name: /user/i }).value).toBe("");
			expect(screen.getByLabelText(/password/i).value).toBe("");
		});

		test("Comprovar que tots els camps estan disponibles per rebre text", () => {
			MockLogin();
			const { usuariInput, claudePasInput } = eventTests({
				usuari: "Nom d'usuari X",
				password: "Clau de Pas X",
			});
			expect(usuariInput.value).toBe("Nom d'usuari X");
			expect(claudePasInput.value).toBe("Clau de Pas X");
		});
	});

	describe("Tests de validació", () => {
		const MockLogin = () => render(<EstructuraApp component={<Login />} />);

		test("Comprovar validació salta amb usuari incorrecte", () => {
			MockLogin();
			expect(screen.queryByText(errorUsuari)).not.toBeInTheDocument();
			eventTests(
				{
					usuari: "Nom d'usuari X........",
					submit: "submit",
				},
				/open session/i
			);
			expect(screen.getByText(errorUsuari)).toBeInTheDocument();
		});

		test("Comprovar validació salta amb clau de pas incorrecta", () => {
			MockLogin();
			expect(screen.queryByText(errorClaudePas)).not.toBeInTheDocument();
			eventTests(
				{
					usuari: "NomUsuari",
					password: "ClaudePas",
					submit: "submit",
				},
				/open session/i
			);
			expect(screen.getByText(errorClaudePas)).toBeInTheDocument();
		});

		test("Comprovar validació no salta amb dades correctes", () => {
			MockLogin();
			expect(screen.queryByText(errorUsuari)).not.toBeInTheDocument();
			expect(screen.queryByText(errorClaudePas)).not.toBeInTheDocument();
			eventTests(
				{
					usuari: "NomUsuarx",
					password: "ClaudPas",
					submit: "submit",
				},
				/open session/i
			);
			expect(screen.queryByText(errorUsuari)).not.toBeInTheDocument();
			expect(screen.queryByText(errorClaudePas)).not.toBeInTheDocument();
		});
	});
});
