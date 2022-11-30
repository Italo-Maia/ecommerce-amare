import BenefitItem from '../../components/Item/BenefitItem';

import styles from '../../styles/Main.module.css';


const Benefits = () => {
    return (
        <div className={styles.Benefits}>
            <div className={`${styles.container} ${styles.flex} ${styles["horizontal-mb"]} ${styles["wrap-mb"]}`}>
            <BenefitItem 
                icon="fa-globe" 
                text="Em 12x sem juros para todo o site"
            />
            <BenefitItem 
                icon="fa-truck" 
                text="Entregamos em todos o Brasil" 
            />
            <BenefitItem  
                icon="fa-windows" 
                text="Os melhores produtos em informática" 
            />
            <BenefitItem  
                icon="fa-apple" 
                text="Fornecedores oficiais" 
            />
            </div>
        </div>
    )
}

export default Benefits;