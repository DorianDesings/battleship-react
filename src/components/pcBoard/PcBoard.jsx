import { Fragment } from 'react';
import { DICTIONARY_TO_PLAY } from '../../constants/board';
import { StyledBoard, StyledCell } from './styles';

const PcBoard = ({ pcBoard }) => {
	return (
		<StyledBoard>
			{DICTIONARY_TO_PLAY.map(letter => (
				<StyledCell key={letter}>{letter}</StyledCell>
			))}
			{pcBoard.map((row, rowIndex) => (
				<Fragment key={rowIndex}>
					<StyledCell>{rowIndex}</StyledCell>
					{row.map((_, columnIndex) => (
						<StyledCell
							key={`${rowIndex}-${columnIndex}`}
							$color={pcBoard[columnIndex][rowIndex]}
						></StyledCell>
					))}
				</Fragment>
			))}
		</StyledBoard>
	);
};

export default PcBoard;
