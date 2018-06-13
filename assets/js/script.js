$(document).ready(function(){

    $(window).scroll(function(){

        let header = $(".header");
        let scroll = $(window).scrollTop();
        let offset = $(".js-header").offset();

        if (scroll >= offset.top){
            header.addClass("sticky");
        }else{
            header.removeClass("sticky")
        }
    });


});



