import styles from "./styles.module.css";

const Button = ({ onClick, label }) => {
	return (
		<div className={`${styles.container}`}>
			<button className={`${styles.button}`} onClick={onClick}>
				{label}
			</button>
		</div>
	);
};
export default Button;
