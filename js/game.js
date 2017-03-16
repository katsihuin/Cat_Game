function startGame() {
	document.turn = "X";
	setMessage(document.turn + "get to start.")
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

function nextMove(square){
	if(square.innerText==''){
		square.innerText =document.turn;
		switchTurn();
	}else{
		setMessage("Escoge otro cuadrado.")
	}	
}

function switchTurn(){
	if(document.turn == "X"){
		document.turn = "O";
	}else{
		document.turn ="X";
	}
}