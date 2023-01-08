import Link from "next/link";
import styles from "../../styles/Main.module.css";

const CartItem = () => {
	const state = { cartQtd: 0 };

	return (
		<div
			className={`${styles["itens-cabecalho"]} ${styles["flex-2"]} ${styles.flex} ${styles.center}`}
		>
			<Link href="/area-cliente">
				<div className={`${styles["item-cabecalho"]}`}>
					<i className="fa fa-user"></i>
					<span>Minha Conta</span>
				</div>
			</Link>
			<Link href="/carrinho">
				<div className={`${styles["item-cabecalho"]} ${styles.cart}`}>
					<i className="fa fa-shopping-bag"></i>
					<span>{state.cartQtd || 0}</span>
				</div>
			</Link>
		</div>
	);
};

export default CartItem;
