import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Button from "../../components/Button";

import InputField from "../../components/InputField";
import InputFieldPasword from "../../components/InputField";
import styles from "../../styles/Login.module.css";
import { AuthContext } from "../../contexts/Auth/AuthContext";

const Login = () => {
	//Contexto
	const auth = useContext(AuthContext);

	//Hook Navigation
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async () => {
		//Se haver email e senha enviar dados para fazer a requisição de login
		console.log([email, password]);
		if (email && password) {
			//retornará true ou false
			const isLogged = await auth.signin(email, password);

			if (isLogged) {
				router.push("/client-area");
			} else {
				console.log("Error isLogged");
			}
		}
	};

	const handleSignUp = () => {
		router.push("/login");
	};

	return (
		<div className={`${styles.container}`}>
			<div className={`${styles.header}`}> Login </div>

			<div className={`${styles.subtitle}`}>
				Faça seu login com suas credenciais ou cadastre-se
			</div>

			<div className={`${styles.formArea}`}>
				<div className={`${styles.inputArea}`}>
					<InputField value={email} onChange={setEmail} />
				</div>

				<div className={`${styles.inputArea}`}>
					<InputFieldPasword
						value={password}
						onChange={setPassword}
					/>
				</div>

				<div className={`${styles.inputArea}`}>
					<Button onClick={handleSubmit} label="Entrar" />
				</div>
			</div>

			<div className={`${styles.forgetArea}`}>
				Equeceu sua senha? Clique aqui
			</div>

			<div className={`${styles.signUpArea}`}>
				<Button onClick={handleSignUp} label="Quero me cadastrar" />
			</div>
		</div>
	);
};
export default Login;
