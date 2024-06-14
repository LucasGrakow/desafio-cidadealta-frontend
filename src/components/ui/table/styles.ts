import styled from "styled-components";

export const TableContainer = styled.table`
	width: 100%;
	padding: 0;
	margin: 0;
	border-spacing: 0;
	border-collapse: collapse;

	thead{
		color: white;
		z-index: 2;
		position: sticky;
		top: 0;
		font-size: 2vh;
		background-color: rgba(0,0,0,0.3);
		backdrop-filter: blur(6px);
		
		filter: drop-shadow(0 0.75vh 0.5rem rgba(0, 0, 0, 0.25));
		th {
			padding-top: 0.5vh;
			padding-bottom: 0.5vh;	
		}
	}

	tbody {
		tr {
			td {
				text-align: center;
				color: white;
				font-size: 2vh;
				padding-top: 0.75vh;
				padding-bottom: 0.75vh;
				
			}
		}
		tr:nth-child(odd) td {
			background-color: rgba(0,0,0,0.4);
		}
		tr:nth-child(even) td {
			background-color: rgba(0,0,0,0.2);
		}
	}
`;