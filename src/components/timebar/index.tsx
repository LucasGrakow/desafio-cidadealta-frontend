import styled from "styled-components";

const Main = styled.div`
	width: 100%;
	height: 10px;
	border-radius: 32px;
	background: rgba(0,0,0,0.3);
	transition: ease 0.3s;

	.status {
		max-width: 100%;
		height: 100%;
		border-radius: inherit;
		background: #68D391;
		transition: ease 0.3s;
		box-shadow: 0vw 0vw 0.5vw #68D391;
	}
`;

export default function Timebar({percentage}: {percentage: number}) {

	return (
		<Main>
			<div className="status" style={{width: percentage+'%'}}/>
		</Main>
	);
}
