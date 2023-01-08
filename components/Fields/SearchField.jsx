import { useState } from "react";

import styles from "../../styles/Main.module.css";

const SearchField = () => {
	const [state, setState] = useState({ termo: " " });

	const submit = () => {
		console.log(state.termo);
	};

	return (
		<div className={`${styles["flex-3"]} ${styles.flex} ${styles.center}`}>
			<input
				name="pesquisa"
				value={state.termo}
				onChange={(e) => setState({ termo: e.target.value })}
				placeholder="Digite aqui a sua pesquisa..."
				className={styles["input-pesquisa"]}
			/>
			<button onClick={submit} className={styles["button-pesquisa"]}>
				<i className="fa fa-search"></i>
			</button>
		</div>
	);
};

export default SearchField;
