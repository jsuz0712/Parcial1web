$(document).ready(function(){
// Activación de transición del menú principal
$('aside#menu_para_mobiles nav a, header article nav a').bind('click',function(event){
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1000,'easeOutExpo');
    event.preventDefault();
    });



    //Abrir y Cerrar Menu De Moviles
    $('#abrir').click(function(){
        $('aside#menu_para_mobiles').animate({
            right: 0
        },300,'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        event.preventDefault();
    });

    $('#cerrar, aside#menu_para_mobiles nav a').click(function(){
        $('aside#menu_para_mobiles').animate({
            right: -290
        },300,'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        event.preventDefault();
    });

});


