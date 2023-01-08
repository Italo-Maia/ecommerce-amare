import { Container, Row, Col } from "react-bootstrap";

import CardAllAboutProducts from "../../../components/AllAboutProducts/Card";

const ProductsHomePage = () => {
	const PRODUCTS = [
		{
			id: 1,
			foto: "/images/fone-canva.png",
			title: "Fone",
			price: 35,
			Promotion: 25,
		},
		{
			id: 2,
			foto: "/images/fone-canva.png",
			title: "Fone",
			price: 35,
			Promotion: 25,
		},
		{
			id: 3,
			foto: "/images/fone-canva.png",
			title: "Fone",
			price: 35,
			Promotion: 25,
		},
		// {
		// 	id: 4,
		// 	foto: "/images/fone-canva.png",
		// 	title: "Fone",
		// 	price: 35,
		// 	Promotion: 25,
		// },
		// {
		// 	id: 5,
		// 	foto: "/images/fone-canva.png",
		// 	title: "Fone",
		// 	price: 35,
		// 	Promotion: 25,
		// },
	];

	return (
		<div>
			<Container>
				<Row>
					<Row>
						<h2 className="d-flex justify-content-center p-3">
							Lançamentos
						</h2>
					</Row>
					{PRODUCTS.map((item) => (
						<Col lg={4} key={item.id}>
							<CardAllAboutProducts
								img={item.foto}
								w="400"
								h="500"
								title={item.title}
								price={item.price}
								alt={item.title}
							/>
						</Col>
					))}
				</Row>
				<Row>
					<Row>
						<h2 className="d-flex justify-content-center p-3">
							Novidades
						</h2>
					</Row>
					{PRODUCTS.map((item) => (
						<Col lg={4} key={item.id}>
							<CardAllAboutProducts
								img={item.foto}
								w="400"
								h="500"
								title={item.title}
								price={item.price}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductsHomePage;

// import Products from "../../../components/Lists/Products";

// import styles from "../../../styles/Main.module.css";

// <div className={`${styles.container} ${styles["Products-Home-Page"]} ${styles.flex} ${styles.vertical}`}>
//     <h2>Lançamentos</h2>
//     <br />
//     <Products
//         product={PRODUCTS}
//         quantityItens={4}
//     />
// </div>
