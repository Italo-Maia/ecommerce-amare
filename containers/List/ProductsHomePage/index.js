import { Container, Row } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import CardProduct from "../../../components/Cards/CardProduct";
import Section from "../../../utils/Section";

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
		{
			id: 4,
			foto: "/images/fone-canva.png",
			title: "Fone",
			price: 35,
			Promotion: 25,
		},
		{
			id: 5,
			foto: "/images/fone-canva.png",
			title: "Fone",
			price: 35,
			Promotion: 25,
		},
	];

	return (
		<div>
			<Section>
				<Container>
					<Row>
						<h2 className="d-flex justify-content-center p-3">
							Lançamentos
						</h2>
					</Row>
					<Swiper
						modules={[Navigation]}
						navigation
						spaceBetween={30}
						slidesPerView={3}
					>
						{PRODUCTS.map((item) => (
							<SwiperSlide key={item.name}>
								<CardProduct
									img={item.foto}
									w="300"
									h="400"
									title={item.title}
									price={item.price}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<h2 className="d-flex justify-content-center p-3">
							Mais Vendidos
						</h2>
					</Row>
					<Swiper
						modules={[Navigation]}
						navigation
						spaceBetween={30}
						slidesPerView={3}
					>
						{PRODUCTS.map((item) => (
							<SwiperSlide key={item.name}>
								<CardProduct
									img={item.foto}
									w="300"
									h="400"
									title={item.title}
									price={item.price}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
			</Section>
			<Section>
				<Container>
					<Row>
						<h2 className="d-flex justify-content-center p-3">
							Slider
						</h2>
					</Row>
					<Swiper
						modules={[Navigation]}
						navigation
						spaceBetween={30}
						slidesPerView={3}
					>
						{PRODUCTS.map((item) => (
							<SwiperSlide key={item.name}>
								<CardProduct
									img={item.foto}
									w="300"
									h="400"
									title={item.title}
									price={item.price}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
			</Section>
		</div>
	);
};

export default ProductsHomePage;
