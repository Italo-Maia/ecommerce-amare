import Link from "next/link";
import styles from "../../styles/Main.module.css";

const REDES_SOCIAIS = [
	{ nome: "facebook", url: "#" },
	{ nome: "instagram", url: "#" },
	{ nome: "twitter", url: "#" },
	{ nome: "whatsapp", url: "#" },
];

const SocialNetworks = () => {
	return (
		<div
			className={`${styles["flex-1"]} ${styles.flex} ${styles.vertical}`}
		>
			<div>
				<h2> REDES SOCIAIS </h2>
				<br />
			</div>
			<div
				className={`${styles["flex-1"]} ${styles.flex} ${styles["redes-sociais"]} ${styles.wrap}`}
			>
				{REDES_SOCIAIS.map((item) => (
					<div
						className={`${styles["flex-1"]} ${styles.flex}`}
						key={item.nome}
					>
						<Link href={item.url}>
							<i className={`fa fa-${item.nome} fa-lg `}></i>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default SocialNetworks;
