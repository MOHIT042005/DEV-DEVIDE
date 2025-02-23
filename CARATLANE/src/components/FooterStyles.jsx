import styled from "styled-components";

export const Box = styled.div`
	padding: 5% 2.5%;
	 background: pink;
	// position: absolute;
	bottom: 0;
	width: 95%;

	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	  margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 20px;
`;

export const Row = styled.div`
	display: grid;
	 grid-template-columns: repeat(
	 	auto-fill,
	 	minmax(185px, 1fr)
	 );
	grid-gap: 0px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(100px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: black ;
	opacity: 0.6;
	//  margin-bottom: 12px;
	font-size: 15px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 15px;
	color: black;
	 margin-bottom: 0px;
	font-weight: bold;

`;
export const Para=styled.p`
font-size:15px;
color: black;
opacity: 0.8;
text-decoration: none;
`;
export const Link = styled.a`
color: dark pink;
font-size:15px;
text-decoration: none;
`;