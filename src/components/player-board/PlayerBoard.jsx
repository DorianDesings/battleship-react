import { Fragment } from 'react';
import { DICTIONARY_TO_PLAY } from '../../constants/board';
import { StyledBoard, StyledCell } from './styles';

const PlayerBoard = ({ playerBoard, selectCell }) => {
	return (
		<StyledBoard>
			{DICTIONARY_TO_PLAY.map(letter => (
				<StyledCell key={letter}>{letter}</StyledCell>
			))}
			{playerBoard.map((row, rowIndex) => (
				<Fragment key={rowIndex}>
					<StyledCell>{rowIndex}</StyledCell>
					{row.map((_, columnIndex) => (
						<StyledCell
							key={`${rowIndex}-${columnIndex}`}
							$color={playerBoard[columnIndex][rowIndex]}
							onClick={() => selectCell(columnIndex, rowIndex)}
						></StyledCell>
					))}
				</Fragment>
			))}
		</StyledBoard>
	);
};

export default PlayerBoard;
