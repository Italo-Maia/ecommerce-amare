import Link from "next/link";
import styles from "../../styles/Main.module.css";

const Categories = () => {
	const state = {
		categories: [
			{
				id: 1,
				name: "Acessorios",
			},
			{
				id: 2,
				name: "Teclado",
			},
			{
				id: 3,
				name: "Mouse",
			},
			{
				id: 4,
				name: "Mousepad",
			},
			{
				id: 5,
				name: "Webcam",
			},
		],
	};

	const { categories } = state;

	return (
		<div className={` ${styles.flex} ${styles.categories}`}>
			{categories.map((category) => (
				<div
					key={category.id}
					className={`${styles["category-item"]} ${styles["flex-1"]} ${styles.flex} ${styles.center}`}
				>
					<Link href={`/category/${category.name}?id=${category.id}`}>
						{category.name}
					</Link>
				</div>
			))}
		</div>
	);
};

export default Categories;
