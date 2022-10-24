$(document).ready(function(){
	var estado = false;

	$('#btn-toggle').on('click',function(){
		$('.seccionToggle').slideToggle();

		if (estado == true) {
			$(this).text("Mostrar Mas");
			// $('body').css({
			// 	"overflow": "auto"
			// });
			estado = false;
		} else {
			$(this).text("Mostrar Menos");
			// $('body').css({
			// 	"overflow": "hidden"
			// });
			estado = true;
		}
	});
});