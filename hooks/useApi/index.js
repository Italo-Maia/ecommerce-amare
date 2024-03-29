import axios from "axios";

//buscar api
const api = axios.create({
	//Ler a informaçao do .env para alterar o endereço da api
	baseURL: "http://34.204.95.70:8080/users",
});

//Essa função irá retornar um objeto com funções para serem utilizadas
export const useApi = () => ({
	//Validar token
	validateToken: async (token) => {
		const response = await api.post("/validate", { token });
		return response.data;
	},

	//Fazer login  == OK
	signin: async (email, password) => {
		const response = await api.post("/signin", { email, password });
		return response.data;
	},

	//Fazer logout
	logout: async () => {
		const response = await api.post("/logout");
		return response.data;
	},
});
