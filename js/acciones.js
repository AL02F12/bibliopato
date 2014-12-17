function buscarlibros ()
{
	$.ajax({
		type:"POST",
		url: "http://192.168.1.188/practica12/listado_general.php"
	}).done(function(msg) {
		var DatosJSON=JSON.parse(msg);
		if (DatosJSON.datos==1)
		{
			$('#libros').empty();
			for (var i=0; i <DatosJSON.libros.length; i++){
					
			$('#libros').append('<div style="float:left;width:45%"> <p>Libro: '+DatosJSON.libros[i].Nombre_libro+' <br> Autor :'+DatosJSON.libros[i].Autor+' </p> </div> <div style="float:left;width:55%" > <img class="portada" src="http://192.168.1.188/practica12/recursos/fotos/'+DatosJSON.libros[i].Id+'.jpg">  </div> <div style="clear:both">  <hr> <hr> </div>');
			}
			$('.portada').width($('#libros').width()*.30);
			$("#page2").trigger('pagecreate');
			}
		if (DatosJSON.datos==0)
		{
			alert("No hay Libros que mostrar");
		}
		$('#page2').trigger('pagecreate');
	});
}

  
function buscargenero (Q)
{
	alert ("Q" + Q);
	dato ="Genero="+Q;
	$.ajax({
		type: "POST",
		url: "http://192.168.1.188/practica12/ConsultaGenero.php",
		data: dato
	}).done(function(msg) {
		alert (msg);
		var DatosJSON=JSON.parse(msg);
		if (DatosJSON.datos==1)
		{
			$('#listag').empty();
			for (var i=0; i <DatosJSON.libros.length; i++){
					
			$('#listag').append('<div style="float:left;width:45%"> <p> Género:: '+DatosJSON.libros[i].Genero+' <br> Libro: '+DatosJSON.libros[i].Nombre_libro+' <br> Autor :'+DatosJSON.libros[i].Autor+' </p> </div> <div style="float:left;width:55%"> <img class="portada" src="http://192.168.1.188/practica12/recursos/fotos/'+DatosJSON.libros[i].Id+'.jpg"  width:30%; height:30%;>  </div> <div style="clear:both">  <hr> <hr> </div> ' +DatosJSON.libros[i].Id);
			}
			$("#page4").trigger('pagecreate');
			}
		if (DatosJSON.datos==0)
		{
			alert("No hay Géneros que mostrar");
		}
		$('#page4').trigger('pagecreate');
	});
}

   
$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#todos').tap(function(){
    buscarlibros ();

	$.mobile.changePage('#page2');
  });
  
 $('#bgenero').tap(function(){
	 alert ("dentro bgenero");
	 var selected = $('#selectgen').find('option:selected');
    
    buscargenero (selected.text());

	$.mobile.changePage('#page4');
  }); 
 });  
 }); 
 



/*

$(document).ready(function(e) {
	$('#bgenero').click(function(){
		var selected = $('#selectgen').find('option:selected');
    alert(selected.val() + ' ' + selected.text());
	
	});
});*/