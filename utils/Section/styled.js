import styled from "styled-components";

export const Section = styled.section`
	padding: ${(props) => (props.paddinLg ? `4rem 0 2rem 0` : `2rem 0 1rem 0`)};

	min-height: ${(props) => (props.minH ? `43rem` : ``)};

	display: ${(props) => (props.flex ? `flex` : `block`)};
	align-items: center;

	&.not-pd {
		padding: 0;
	}

	&.xs {
		padding: 1.5rem 0 1rem 0;
	}
`;
