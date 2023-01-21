import Image from "next/image";

import * as Styled from "./styled";

export default function CardProduct(props) {
	const formatMoney = (value) =>
		"R$ " + (value || 0).toFixed(2).replace(".", ",");
	const result = formatMoney(props.price);

	return (
		<Styled.Card>
			<Styled.Box>
				<Image
					className="img-fallback"
					src={props.img}
					width={props.w}
					height={props.h}
					alt={props.alt || "fone"}
				/>
			</Styled.Box>
			<Styled.Content>
				<Styled.Title> {props.title} </Styled.Title>
				<Styled.Price> {result} </Styled.Price>
			</Styled.Content>
		</Styled.Card>
	);
}
