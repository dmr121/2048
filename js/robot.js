
function getGameState() {
	return localStorage.gameState;
}

console.log(this.getGameState());

function getBestMove() {
	var randNum = Math.floor(Math.random() * 4);
	return randNum;
}