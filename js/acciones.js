function buscarlibros ()
{
	$.ajax({
		type:"POST",
		url: "http://192.168.1.188/practica12/listado_general.php"
	}).done(function(msg) {
		alert (msg);
		var DatosJSON=JSON.parse(msg);
		
		if (DatosJSON.datos==1)
		{
			alert ('datos');
			$('#libros').empty();
			for (var i=0; i <DatosJSON.libros.length; i++){
					
			$('#libros').append('<div style="float:left;width:45%"> <p>Libro: '+DatosJSON.libros[i].Nombre_libro+' <br> Autor :'+DatosJSON.libros[i].Autor+' </p> </div> <div style="float:left;width:55%"> <img class="portada" src="http://192.168.1.188/practica12/recursos/fotos/'+DatosJSON.libros[i].Id+'.jpg">  </div> <div style="clear:both">  <hr> <hr> </div>');
			}
			alert ('datos 2');
			$("#page2").trigger('pagecreate');
		}
		
		if (DatosJSON.datos==0)
		{
			alert("No hay Libros que mostrar");
		}
		$('#page2').trigger('pagecreate');
	});
	
	
}





$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#todos').tap(function(){
    buscarlibros ();
	alert ("fuera");
	$.mobile.changePage('#page2');
  });
 }); //deviceready
}); //document ready

