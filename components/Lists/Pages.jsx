import Link from "next/link";
import styles from "../../styles/Main.module.css";

const Pages = () => {
	return (
		<div
			className={`${styles["flex-1"]} ${styles.flex} ${styles.vertical} ${styles.institucional}`}
		>
			<div>
				<h2>Paginas</h2>
				<br />
			</div>
			<Link href="/">Pagina Inicial</Link>
			<Link href="/cart">Carrinho</Link>
			<Link href="/login">Minha Conta</Link>
			<Link href="/sobre">SOBRE</Link>
		</div>
	);
};

export default Pages;
