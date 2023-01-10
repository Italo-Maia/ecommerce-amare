import { useContext } from "react";
import { Login } from "../../pages/login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }) => {
	const auth = useContext(AuthContext);

	//Componente para saber se o usuario está logado, se não estiver será redirecionado para a pagina de login
	if (!auth.user) {
		return <Login />;
	}

	return children;
};
