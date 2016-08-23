$(document).ready(function () {
    $("#botonAN").click(function () {
        $("#textoAN").toggle();
        $("#textoDonaciones").hide();
        $("#textoIPV").hide();
        $('html, body').animate({
            scrollTop: $("#textoAN").offset().top - 120
        }, 1000);
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
            scrollTop: $("#textoDonaciones").offset().top
        }, 1000);
    });
});