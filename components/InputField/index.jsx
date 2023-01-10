import { useState } from "react";
import styles from "./styles.module.css";

// InputNameFormLogin que recebe value e Onchange da pagina de login
const InputField = ({ value, onChange }) => {
	const [focused, setFocused] = useState(false);

	return (
		<div
			className={`${styles.container}`}
			style={{ borderColor: focused ? "#6a7dfe" : "#f9f9fb" }}
		>
			<input
				type="text"
				className={`${styles.input}`}
				placeholder="Digite seu e-mail"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>
		</div>
	);
};

// InputPasswordFormLogin que recebe value e Onchange da pagina de login
export const InputFieldPasword = ({ value, onChange }) => {
	const [focused, setFocused] = useState(false);

	return (
		<div
			className={`${styles.container}`}
			style={{ borderColor: focused ? "#6a7dfe" : "#f9f9fb" }}
		>
			<input
				type="password"
				className={`${styles.input}`}
				placeholder="Digite sua senha"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>
		</div>
	);
};

// InputNameFormLogin que recebe value e Onchange da pagina de login
export default InputField;
