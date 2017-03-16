function startGame() {
	document.turn = "X";
	setMessage(document.turn + "get to start.")
}

function setMessage(msg){
	$('#message').text = msg;
}

function nextMove(square){
	square.innerText =document.turn;
	switchTurn();
}

function switchTurn(){
	if(document.turn == "X"){
		document.turn = "O";
	}else{
		document.turn ="X";
	}
}