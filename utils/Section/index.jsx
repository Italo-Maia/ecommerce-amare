import * as Styled from "./styled";

export default function Section(props) {
	return (
		<Styled.Section {...props} className={`${props.children || "section"}`}>
			{props.children}
		</Styled.Section>
	);
}
