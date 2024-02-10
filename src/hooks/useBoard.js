import { useState } from 'react';

const fillPcBoard = () => {
	const ships = [5, 5, 4, 3, 3, 2, 1, 1];
	const pcBoard = [];

	for (let column = 0; column < 10; column++) {
		pcBoard[column] = [];
		for (let row = 0; row < 10; row++) {
			pcBoard[column][row] = 0;
		}
	}

	const placeShip = length => {
		const isVertical = Math.random() < 0.5;
		const startColumn = Math.floor(Math.random() * (10 - length + 1));
		const startRow = Math.floor(Math.random() * (10 - length + 1));

		for (let i = 0; i < length; i++) {
			if (isVertical) {
				if (pcBoard[startColumn][startRow + i] !== 0) {
					// Si hay un barco en la posición, reiniciar
					return placeShip(length);
				}
			} else {
				if (pcBoard[startColumn + i][startRow] !== 0) {
					// Si hay un barco en la posición, reiniciar
					return placeShip(length);
				}
			}
		}

		for (let i = 0; i < length; i++) {
			if (isVertical) {
				pcBoard[startColumn][startRow + i] = length;
			} else {
				pcBoard[startColumn + i][startRow] = length;
			}
		}
	};

	ships.forEach(shipLength => {
		placeShip(shipLength);
	});

	return pcBoard;
};

export const useBoard = () => {
	const [playerBoard, setPlayerBoard] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	]);

	const [pcBoard, setPcBoard] = useState(fillPcBoard);

	const selectCell = (column, row) => {
		if (pcBoard[column][row] === 0) {
			setPlayerBoard([...playerBoard], (playerBoard[column][row] = 1));
		} else if (pcBoard[column][row] !== 0) {
			console.log(pcBoard[column][row]);
			setPlayerBoard([...playerBoard], (playerBoard[column][row] = 2));
		}
	};

	return { playerBoard, setPlayerBoard, selectCell, pcBoard };
};
