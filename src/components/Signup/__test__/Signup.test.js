import { render, screen } from "@testing-library/react";
import { eventTests } from "../../../lib/utils/eventTests";
import {
	errorUsuari,
	errorClaudePas,
} from "../../../lib/constants/validateSchema";
import { EstructuraApp } from "../../../lib/utils/estructuraApp";
import SignUp from "../Signup";

beforeAll(() => {
	console.log("Inici tests Signup");
});

describe("Signup testing", () => {
	
	describe("Tests de valors inicials", () => {
		const MockSignup = () => render(<EstructuraApp component={<SignUp />} />);

		test("Comprovar inputs buits a l'inici", () => {
			MockSignup();
			expect(
				screen.getByRole("textbox", {
					name: /user/i,
				}).value
			).toBe("");
			expect(screen.getByLabelText(/password/i).value).toBe("");
		});

		test("Comprovar que tots els camps estan disponibles per rebre text", () => {
			MockSignup();
			const { usuariInput, claudePasInput } = eventTests({
				usuari: "Nom d'usuari X",
				password: "Clau de Pas X",
			});
			expect(usuariInput.value).toBe("Nom d'usuari X");
			expect(claudePasInput.value).toBe("Clau de Pas X");
		});
	});

	describe("Tests de validació", () => {
		const MockSignup = () => render(<EstructuraApp component={<SignUp />} />);

		test("Comprovar validació salta amb usuari incorrecte", () => {
			MockSignup();
			expect(screen.queryByText(errorUsuari)).not.toBeInTheDocument();
			eventTests(
				{
					usuari: "Nom d'usuari X........",
					submit: "submit",
				},
				/create user/i
			);
			expect(screen.getByText(errorUsuari)).toBeInTheDocument();
		});

		test("Comprovar validació salta amb clau de pas incorrecta", () => {
			MockSignup();
			expect(screen.queryByText(errorClaudePas)).not.toBeInTheDocument();
			eventTests(
				{
					usuari: "NomUsuari",
					password: "ClaudePas",
					submit: "submit",
				},
				/create user/i
			);
			expect(screen.getByText(errorClaudePas)).toBeInTheDocument();
		});

		test("Comprovar validació no salta amb dades correctes", () => {
			MockSignup();
			expect(screen.queryByText(errorUsuari)).not.toBeInTheDocument();
			expect(screen.queryByText(errorClaudePas)).not.toBeInTheDocument();
			eventTests(
				{
					usuari: "NomUsuarx",
					password: "ClaudPas",
					submit: "submit",
				},
				/create user/i
			);
			expect(screen.queryByText(errorUsuari)).not.toBeInTheDocument();
			expect(screen.queryByText(errorClaudePas)).not.toBeInTheDocument();
		});
	});
});
