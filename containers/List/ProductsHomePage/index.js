import { Container, Row } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import CardProduct from "../../../components/Cards/CardProduct";
import Section from "../../../utils/Section";

import { MOCKS } from "../../../mocks";

const ProductsHomePage = () => {
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
						{MOCKS.PRODUCTS_LANCAMENTOS.map((item) => (
							<SwiperSlide key={item.name}>
								<CardProduct
									img={item.foto}
									w="200"
									h="300"
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
						{MOCKS.PRODUCTS_MAIS_VENDIDOS.map((item) => (
							<SwiperSlide key={item.name}>
								<CardProduct
									img={item.foto}
									w="200"
									h="300"
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
							OFERTAS
						</h2>
					</Row>
					<Swiper
						modules={[Navigation]}
						navigation
						spaceBetween={30}
						slidesPerView={3}
					>
						{MOCKS.PRODUCTS_OFERTAS.map((item) => (
							<SwiperSlide key={item.name}>
								<CardProduct
									img={item.foto}
									w="200"
									h="300"
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
