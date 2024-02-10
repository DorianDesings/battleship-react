import { useBoard } from '../../hooks/useBoard';
import PcBoard from '../pcBoard/PcBoard';
import PlayerBoard from '../player-board/PlayerBoard';
import { StyledGame } from './styles';
const Game = () => {
	const { playerBoard, selectCell, pcBoard } = useBoard();
	return (
		<StyledGame>
			<PlayerBoard playerBoard={playerBoard} selectCell={selectCell} />

			<PcBoard pcBoard={pcBoard} />
		</StyledGame>
	);
};

export default Game;
