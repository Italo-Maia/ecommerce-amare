import styles from "../../styles/Main.module.css";
import Pages from "../../components/Lists/Pages";
import SocialNetworks from "../../components/Lists/SocialNetworks";
import DataPage from "../../components/Item/DataPages";

const Rodape = () => {
	return (
		<div className={`${styles.Rodape}`}>
			<div
				className={`${styles.container} ${styles.flex} ${styles.horizontal}`}
			>
				<Pages />
				<SocialNetworks />
				<DataPage />
			</div>
		</div>
	);
};

export default Rodape;
