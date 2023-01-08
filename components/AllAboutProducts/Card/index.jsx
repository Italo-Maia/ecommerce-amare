import Image from "next/image";
import * as Styled from "./styled";

export default function CardAllAbotProducts(props) {
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
				<Styled.Price> {props.price} </Styled.Price>
			</Styled.Content>
		</Styled.Card>
	);
}
