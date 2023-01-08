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
			<Link href="/">
				<span>Pagina Inicial</span>
			</Link>
			<Link href="/cart">
				<span>Carrinho</span>
			</Link>
			<Link href="/area-client">
				<span>Minha Conta</span>
			</Link>
			<Link href="/sobre">
				<span>SOBRE</span>
			</Link>
		</div>
	);
};

export default Pages;
