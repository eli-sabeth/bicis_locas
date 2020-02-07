function validateForm(){

	//Traigo elemnetos desde el HTML - variables.
	var nombre = document.getElementById("name");
	var last = document.getElementById("lastname");
	var correo = document.getElementById("input-email");
	var password = document.getElementById("input-password");


	//Si está los campos estan vacios: alerta.
	if(nombre.value==""){
		alert("Ingresa tu Nombre");
		return;
	}
	if(last.value==""){
		alert("Ingresa tu Apellido");
		return;
	}
	if(correo.value==""){
		alert("Ingresa tu email");
		return;
	}
	if(password.value==""){
		alert("Ingresa tu Contraseña");
		return;
	}

	//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z:

	if(!nombre.value.match(/^[a-zA-Z]+$/)){
        alert('Ingrese solo letras de la A a la Z en el campo Nombre');
        return;
	}
	
	if(!last.value.match(/^[a-zA-Z]+$/)){
        alert('Ingrese solo letras de la A a la Z en el campo Apellido');
        return;
	}
	
	//Para los campos nombre y apellido la primera letra debe ser mayúscula:

	if(nombre.value[0]!=nombre.value[0].toUpperCase()){
		alert('Su Nombre debe comenzar con letra mayúscula');
        return;
	}

	if(last.value[0]!=last.value[0].toUpperCase()){
		alert('Su Apellido debe comenzar con letra mayúscula');
        return;
	}

	//Validar que el campo email tenga un formato válido. Ej: name@domain.com
	if(!correo.value.match(/^\w+@\w+\.\+$/)){
		alert('Ingrese un correo válido');
        return;
	}
}
	






	//(/^\w+@\w+\.\w+$/) : arroba..