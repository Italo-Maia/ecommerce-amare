import styled from "styled-components";

export const Card = styled.div`
	width: 100%;
	position: relative;
`;

export const Box = styled.div`
	width: 100%;
	position: relative;
	overflow: hidden;

	&:after {
		content: "";
		position: absolute;
		width: 100%;
		height: 0;
		bottom: 0;
		left: 0;
		z-index: 4;
		transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
	}
`;

export const Content = styled.div`
	width: 100%;
	padding: 0.5rem 0;
`;

export const Title = styled.p`
	font-size: 14px;
	font-weight: bold;
	color: gray;
`;

export const Price = styled.p`
	color: orange;
	font-size: 25px;
`;
