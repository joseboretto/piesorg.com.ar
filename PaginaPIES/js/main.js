var nombreContacto;
var emailContacto;
var asuntoContacto;
var mensajeContacto;
var anchoBarraNavegacion = 128;
$(document).ready(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (screen.width < 500) {
            anchoBarraNavegacion = 78;
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - anchoBarraNavegacion
                }, 1000);
                return false;
            }
        }
    });
    $("#botonAN").click(function () {
        cerrarTodosMenos("textoAN");
    });
    $("#botonIPV").click(function () {
        cerrarTodosMenos("textoIPV");
    });
    $("#botonLF").click(function () {
        cerrarTodosMenos("textoLF");
    });
    $("#botonVU").click(function () {
        cerrarTodosMenos("textoVU");
    });
    $("#botonDonaciones").click(function () {
        cerrarTodosMenos("textoDonaciones");
    });

    function cerrarTodosMenos(boton) {
        //console.log("Boton", boton);
        var element = document.getElementById(boton);
        //console.log("Elemnet", element);
        var style = window.getComputedStyle(element);
        //console.log("style", style);
        var display = style.getPropertyValue('display');
        //console.log("Display", display);
        $("#textoAN").hide();
        $("#textoIPV").hide();
        $("#textoLF").hide();
        $("#textoVU").hide();
        $("#textoDonaciones").hide();
        var identificador = "#".concat(boton);
        if (display == "none") {
            $(identificador).show();
            //console.log("MUESTRO");
            $('html, body').animate({
                scrollTop: $(identificador).offset().top - anchoBarraNavegacion
            }, 1000);
        }
        else {
            $(identificador).hide();
            //console.log("ESCONDO");
        }
    }
    //obtengo todos los elemntos del formularios
    nombreContacto = document.getElementById("nombreContacto");
    emailContacto = document.getElementById("emailContacto");
    asuntoContacto = document.getElementById("asuntoContacto");
    mensajeContacto = document.getElementById("mensajeContacto");
    formualarioContacto = document.getElementById("contact_form");
    //control del carusel
    $("#caruselIzq").click(function () {
        $('.carousel').carousel('prev');
    });
    $("#caruselDer").click(function () {
        $('.carousel').carousel('next');
    });
});

function enviarEmailContacto() {
    console.log("ESTOY EN EL HTML");
    //emailjs.init("user_htnIlNnLA1EWRQGSVuJTO");
    // console.log("Formulario ", nombreContacto.value, emailContacto.value, asuntoContacto.value, mensajeContacto.value);
    //console.log("Todos los input", todosLosInput, todosLosInput.value);
    // REVISE LO DE LOS PARAMETROS Y TENIAS RAZON PATO, DESPUES CREE UNA PANTAILLA CON UN SOLO PARAMTREO, LO TESTETO EN LA PAGINA Y ANFUVO PERO CUANDO PASO EL CODIGO ACA NO ANDA, LO PASE AL HTML PERO SIGUE SIN ANDAS, SOY UN NAVO.
    var params = {
      "reply_to": $('#emailContacto').val(),
      "from_name": $('#from_name').val(),
      "to_name": "to_name",
      "message_html": $('#mensajeContacto').val()
    };

    $('.message-contacto').hide();


    emailjs.send("default_service", "template_c6ZX6DXO", params).then(function (response) {
      $('.message-contacto-ok').show();
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function (err) {
        console.log("FAILED. error=", err);
        $('.message-contacto-error').show();
    });
}
