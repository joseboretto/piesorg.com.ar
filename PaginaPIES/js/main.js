var nombreContacto;
var emailContacto;
var asuntoContacto;
var mensajeContacto;
var todosLosInput;
var formualarioContacto;
$(document).ready(function () {
    $("#botonAN").click(function () {
        $("#textoAN").toggle();
        $("#textoDonaciones").hide();
        $("#textoIPV").hide();
        $('html, body').animate({
            scrollTop: $('#textoAN').offset().top
        }, 'slow');
        return false;
    });
    $("#botonIPV").click(function () {
        $("#textoIPV").toggle();
        $("#textoAN").hide();
        $("#textoDonaciones").hide();
        $('html, body').animate({
            scrollTop: $("#textoIPV").offset().top - 120
        }, 1000);
    });
    $("#botonDonaciones").click(function () {
        $("#textoDonaciones").toggle();
        $("#textoAN").hide();
        $("#textoIPV").hide();
        $('html, body').animate({
            scrollTop: $("#textoDonaciones").offset().top - 120
        }, 1000);
    });
    //obtengo todos los elemntos del formularios
    nombreContacto = document.getElementById("nombreContacto");
    emailContacto = document.getElementById("emailContacto");
    asuntoContacto = document.getElementById("asuntoContacto");
    mensajeContacto = document.getElementById("mensajeContacto");
    formualarioContacto = document.getElementById("contact_form");
    //otra forma de obtenerlos
    todosLosInput = document.forms["contact_form"].getElementsByTagName("input");
});

function enviarEmailContacto2() {
    console.log("INICIO ENVIAR EMIAL");
    emailjs.init("user_htnIlNnLA1EWRQGSVuJTO");
    // console.log("Formulario ", nombreContacto.value, emailContacto.value, asuntoContacto.value, mensajeContacto.value);
    //console.log("Todos los input", todosLosInput, todosLosInput.value);
    // REVISE LO DE LOS PARAMETROS Y TENIAS RAZON PATO, DESPUES CREE UNA PANTAILLA CON UN SOLO PARAMTREO, LO TESTETO EN LA PAGINA Y ANFUVO PERO CUANDO PASO EL CODIGO ACA NO ANDA, LO PASE AL HTML PERO SIGUE SIN ANDAS, SOY UN NAVO.
    emailjs.send("joseboretto", "plantilla", {
        "nombre": "joseeeee"
    }).then(function (response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function (err) {
        console.log("FAILED. error=", err);
    });
}