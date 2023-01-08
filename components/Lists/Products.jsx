import Product from "../Item/Product";
import styles from "../../styles/Main.module.css";

const Products = (props) => {
	const { product } = props;

	return (
		<div className={`${styles.Products} ${styles.flex}`}>
			{product.map((item) => (
				<Product
					item={item}
					key={item.id}
					// quantityItens={quantityItens}
				/>
			))}
		</div>
	);
};

export default Products;
