
function getBestSmartMove(grid, score) {
	var board = new sGrid(4, grid.grid.cells);
	var cellValue = board.cells[i][j].value;

	//return move;
}

function getBestMove(grid, score, looks) {
	var board = new Grid(4, grid.grid.cells);
	var scores = [[], [], [], []];

	for(i = 0; i < 500; ++i) {
		var move = Math.floor(Math.random() * 4);
		var newScore = randomRun(grid, score, move, looks);
		scores[move].push(newScore);
	}

	avgScores = [];
	for(var i = 0; i < 4; ++i) {
		avgScores.push(avg(scores[i]));
	}

	var bestMove = avgScores.indexOf(highestScore(avgScores));
	return bestMove;
}

function randomRun(grid, score, direction, numRuns) {
	var board = new sGrid(4, grid.grid.cells);
	var data = board.move(direction, score);
	score = data.score;
	if(!data.moved) {
		return score;
	}
	for (var i = 0; i < numRuns; ++i) {
		data = board.move(Math.floor(Math.random() * 4), score);
		score = data.score;
		if(data.over) {
			return score;
		}
	}
}

function sum(scores) {
	var total = 0;
	for(i = 0; i< scores.length; ++i) {
		total += scores[i];
	}
	return total;
}

function avg(scores) {
	var total = 0;
	var numScores = scores.length;
	for(i = 0; i< scores.length; ++i) {
		if(scores[i]) {
			total += scores[i];
		} else {
			--numScores;
		}
	}
	return total/numScores;
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