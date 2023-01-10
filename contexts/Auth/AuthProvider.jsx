import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
	//Saber se o usuario esta logado, se não estiver o valor será null
	const [user, setUser] = useState(null);

	//usando API hooks
	const api = useApi();

	const signin = async (email, password) => {
		const data = await api.signin(email, password);
		//Se tiver uma resposta será retornada como true pela api, se não, false.

		if (data.message && data.token) {
			setUser(data.message);
			setToken(data.token);
			return true;
		}
		return false;
	};

	const signout = async () => {
		await api.logout();
		setUser(null);
	};

	const setToken = (token) => {
		localStorage.setItem("authToken", token);
	};

	return (
		<AuthContext.Provider value={{ user, signin, signout }}>
			{children}
		</AuthContext.Provider>
	);
};
