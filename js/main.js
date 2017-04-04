var form = document.getElementById("form");
form.addEventListener("focus", function( event ) {
  event.target.style.background = "pink";    
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";    
}, true);


var sNombre = document.getElementById("name");
	sApellido = document.getElementById("lastname"),
	sEmail = document.getElementById("input-email"),
	sContraseña = document.getElementById("input-password"),	
	nlista = document.getElementById("lista");
var span = document.querySelectorAll(".input-box span");


function validateForm(){
/* Escribe tú código aquí */
	var regetTexto = /^[a-zA-Z_áéíóúñ]*$/,
 	    regetCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;

if(sNombre.value===""||sApellido.value===""||sEmail.value===""||sContraseña.value===""){
 		alert("Todos los campos son obligatorios")
 			return false;
 		}
 	
 	else if (sNombre.value == null || sNombre.value.length == 0|| sNombre.value.search(regetTexto)|| sNombre.value[0] !== sNombre.value[0].toUpperCase()){
 		
 		alert("Ingrese el Nombre es Obligatorio, Recuerde la primera es Mayúscula");
		return false;
 	   }	

    else if (sApellido.value == null || sApellido.value.length == 0|| sApellido.value.search(regetTexto)|| sApellido.value[0] !== sApellido.value[0].toUpperCase()){
 		alert("Ingrese el Apellido es Obligatorio, Recuerde la primera es Mayúscula");
 		return false;
 	}

 	else if (sEmail.value.search(regetCorreo)) {
 		alert("Ingrese un correo valido")
 		return	false;
 	}

 	else if (sContraseña.value.length < 6 || sContraseña.value.length >20 || sContraseña=='password'|| sContraseña=="123456" || sContraseña=="098754" ){
 	alert("La contraseña debe tener entre 6 y 20 caracteres");
 		return	false;
 	}

 	else if(nlista.value==0){
 		alert("Debe seleccionar una opción de la lista");
 		return false;
 	}


}