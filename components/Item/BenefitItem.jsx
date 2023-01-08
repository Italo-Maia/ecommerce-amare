import styles from "../../styles/Main.module.css";

const BenefitItem = ({ icon, text }) => {
	return (
		<div
			className={`${styles.container} 
                ${styles["flex-1"]} 
                ${styles.flex} 
                ${styles["flex-start"]} 
                ${styles.vertical} 
                ${styles["wrap-2-mb"]} 
                ${styles.benefitItem}`}
		>
			<i className={`fa ${icon} fa-3x`}></i>
			<span className={`${styles["text-center"]}`}>{text}</span>
		</div>
	);
};

export default BenefitItem;
