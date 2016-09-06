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

function enviarEmailContacto() {
    emailjs.init("user_htnIlNnLA1EWRQGSVuJTO");
    console.log("Formulario ", nombreContacto.value, emailContacto.value, asuntoContacto.value, mensajeContacto.value);
    console.log("Todos los input", todosLosInput, todosLosInput.value);
    // parameters: service_id, template_id, template_parameters
    emailjs.sendForm('default_service', 'template_c6ZX6DXO', formualarioContacto);
    // parameters: service_id, template_id, template_parameters
//    emailjs.send("joseboretto", "template_c6ZX6DXO", {
//        from_name: "James"
//        , reply_to: "pies"
//        , message_html: "hola wachin"
//    });
    //    emailjs.send("joseboretto", "template_c6ZX6DXO", {
    //        name: "James"
    //        , notes: "Check this out!"
    //    }).then(function (response) {
    //        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    //    }, function (err) {
    //        console.log("FAILED. error=", err);
    //    });
}