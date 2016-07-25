
$(document).ready(function () {
    $("#botonDonaciones").click(function () {
        $("#textoDonaciones").show();
        $("#textoAN").hide();
        $("#textoIPV").hide();


        $('html, body').animate({
            scrollTop: $("#textoDonaciones").offset().top
        }, 1000);
    });

    $("#botonAN").click(function () {
        $("#textoAN").show();
        $("#textoDonaciones").hide();
        $("#textoIPV").hide();


        $('html, body').animate({
            scrollTop: $("#textoAN").offset().top-120
        }, 1000);
    });

    $("#botonIPV").click(function () {
        $("#textoIPV").show();
        $("#textoAN").hide();
        $("#textoDonaciones").hide();


        $('html, body').animate({
            scrollTop: $("#textoIPV").offset().top-120
        }, 1000);
    });

});

