const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const documento = document.getElementById("dni")
const diaNacimiento = document.getElementById("dia_nacimiento")
const mesNacimiento = document.getElementById("mes_nacimiento")
const añoNacimiento = document.getElementById("año_nacimiento")
const codigoArea = document.getElementById("codigo_area")
const numeroTelefono = document.getElementById("numero")
const calle = document.getElementById("calle")
const numeroCalle = document.getElementById("numero_calle")
const correo = document.getElementById("email")
const clave = document.getElementById("clave")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
    parrafo.innerHTML = ""
    
    if (nombre.value.length < 2) {
        warnings += `El nombre es muy corto <br>`
        entrar = true
    }
    if (apellido.value.length < 2) {
        warnings += `El apellido es muy corto<br>`
        entrar = true
    }

    if (documento.value.length < 6) {
        warnings += `El DNI es invalido <br>`
        entrar = true
    }

    if (diaNacimiento.value == "") {
        warnings += `Por favor elija un día <br>`
        entrar = true
    }
    if (mesNacimiento.value == "") {
        warnings += `Por favor elija un mes <br>`
        entrar = true
    }
    if(añoNacimiento.value <1930 ||añoNacimiento >2500 ){
        warnings += `Ingrese un año valido <br>`
        entrar=true
    }

    if (codigoArea.value < 11 || codigoArea.value > 3894) {
        warnings += `Código de área invalido <br>`
        entrar = true
    }

    if (numeroTelefono.value.length < 6) {
        warnings += `Número telefonico invalido<br>`
        entrar = true
    }
    if (calle.value == "") {
        warnings += `Ingrese la dirección<br>`
        entrar = true
    }
    if (numeroCalle.value == "") {
        warnings += `Ingrese el número de la calle <br>`
        entrar = true
    }
    

    if (!regexEmail.test(correo.value)) {
        warnings += `El correo no es valido <br>`
        entrar = true
    }
    if (clave.value.length < 6) {
        warnings += `La contraseña es muy corta <br><br>`
        entrar =
            true
    }
    if (entrar) {
        parrafo.innerHTML = warnings
    }
    else {
        parrafo.innerHTML = 'Formulario Enviado!'
    }

})

  