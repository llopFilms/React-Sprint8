import { Navigate, Outlet } from "react-router-dom";
import { useAutenticacioContext } from "../context/AutentitcacioContext";

const Privat = () => {
	const { usuariLoguejat } = useAutenticacioContext();

	if (usuariLoguejat === null) {
		return <Navigate to={process.env.PUBLIC_URL + "/auth/login"} />;
	}
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Privat;
