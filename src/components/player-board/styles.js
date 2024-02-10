import styled from 'styled-components';

const StyledBoard = styled.div`
	display: grid;
	grid-template-columns: 30px repeat(10, 30px);
	grid-template-rows: 30px repeat(10, 30px);
`;

const StyledCell = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border: 1px solid aliceblue;
	background-color: ${({ $color }) => {
		switch ($color) {
			case 0:
				return 'transparent';
			case 1:
				return 'blue';
			case 2:
				return 'red';
		}
	}};
	cursor: crosshair;

	&:first-child {
		grid-column: 2 / 3;
	}
`;

export { StyledBoard, StyledCell };
