$(function(){

    var nav = $('nav');
    var navTop = nav.offset().top;

    $(window).scroll(function(){
        var winTop = $(this).scrollTop();

        if(winTop >= navTop){
            nav.addClass('fixed')
        }else if(winTop <= navTop){
            nav.removeClass('fixed')
        }
    });

});