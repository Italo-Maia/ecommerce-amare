import Link from 'next/link';

import styles from '../../styles/Main.module.css'

const Product = (props) => {
    const formatMoney = (value) => "R$ " + (value || 0).toFixed(2).replace(".", ",");

    // const { item, key, quantityItens } = props;
    const { id, title, price, promotion, foto } = props.item;

    const temPromo = promotion && price !== promotion;

    return (
        <Link href='/'>
            <div className={`${styles.product} ${styles["flex-1"]} ${styles.vertical} ${styles.flex} `}>
                <div className={`${styles["product-image"]} ${styles.flex} ${styles.center}`} >
                    <img
                        src={`${foto[0]}`} alt={title} style={{ maxWidth: "95%", maxHeight: "95%" }}
                    />
                </div>
                <div className={`${styles["product-title"]} ${styles.flex} ${styles.center}`}>
                        <h3>{title}</h3>
                    </div>
                <br />

                <div className={`${styles["product-price"]} ${temPromo ? styles["product-value"] : ""} ${styles.flex} ${styles.center}`}>
                    <h2>{formatMoney(price)}</h2>
                </div>

                {temPromo && (
                    <div className={`${styles["product-price-promotion"]} ${styles.flex} ${styles.center}`}>
                        <h2>{formatMoney(price)}</h2>
                    </div>
                )
                }
                <div className={`${styles["product-price-parcel"]} ${styles.flex} ${styles.center}`}>
                    <h4>ou 4x de {formatMoney((temPromo ? promotion : price / 6))}</h4>
                </div>
            </div>
        </Link>
    )
}

export default Product;