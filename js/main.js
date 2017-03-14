$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
	$('#btn-nombres').click(onClickBtnNombre);
    $('#btn-historial').click(onClickBtnHistorial);
    $('#gameList').on('click','button', onClickBtnItemGame);
	TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickBtnItemGame (){
    var idGame = $(this).parent().data(idGame);
    console.log(idGame)
    getSingleGame(idGame);
    gotoSection(historial-comments);
}

function onClickBtnSaludo() {
	gotoSection('nombres');
}

function onClickBtnNombre() {
	gotoSection('juego');
}
function onClickBtnHistorial(evt) {
	evt.preventDefault();
	gotoSection('historial');
	getHistorial();
}
    
function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

	TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}

function getHistorial() {
    $.ajax({
        url:'http://test-ta.herokuapp.com/games'
    }).success(function (_data){
        //console.log(_data);
        drawHistorial(_data);
    });
}

function getSingleGame (_idGame){
    $.ajax({
        url:'http://test-ta.herokuapp.com/games/'+_idGame,
        type: 'GET'
    }).success(function(_data){
        console.log(_data);
    });
}

function getComments (_idGame){
    $.ajax({
        url:'http://test-ta.herokuapp.com/games/'+_idGame+'/comments',
        type: 'GET'
    }).success(function(_data){
        console.log(_data);
    });
}

function drawHistorial (_datos){
     var list = $('#gameList');
    //list.html(_datos);
     for(var i in _datos){
         //console.log(_datos[i].winner_player);
         var html = '<li class="list-group-item"><button class="btn">Ver</button>Ganador: ' + _datos[i].winner_player + '</li>';
         list.append(html);
     }  
}



