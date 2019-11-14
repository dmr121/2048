function getBestMove(grid, score) {
	var scores = [[], [], [], []];
	values = [0, score];
	for(i = 0; i < 100; ++i) {
		tempBoard = new Grid(4, grid.grid.cells);
		var move = Math.floor(Math.random() * 4);
		values = tempBoard.move(move, values[1]);

		for(j = 0; j < 100; ++j) {
			var newMove = Math.floor(Math.random() * 4);
			values = values[0].move(newMove, values[1]);
		}
		scores[move].push(values[1]);
	}

	avgScores = [];
	for(i = 0; i < 4; ++i) {
		tempScore = 0;
		for (j = 0; j < scores[i].length; ++j) {
			tempScore += scores[i][j];
		}
		tempScore /= scores[i].length;
		avgScores.push(tempScore);
	}

	var bestMove = avgScores.indexOf(highestScore(avgScores));
	return bestMove;
}

function getBestMoveR(grid, score, numIter) {
	if(numIter == 0) {
		return;
	}

	
}

function highestScore(scores) {
	var highest = 0;
	for(i = 0; i < scores.length; ++i) {
		if(scores[i] >= highest) {
			highest = scores[i];
		}
	}
	return highest;
}