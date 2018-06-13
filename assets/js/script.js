$(document).ready(function(){

    $(window).scroll(function(){

        let header = $(".header");
        let container = $(".container");
        let scroll = $(window).scrollTop();
        let offset = $(".js-header").offset();

        if (scroll >= offset.top){
            header.addClass("sticky");
            container.addClass("padding");
        }else{
            header.removeClass("sticky");
            container.removeClass("padding")
        }
    });
    $(".js-nav-button").mouseenter(function(){

        $(".dropdown-content").css("display","block")
    
    });

    $(".dropdown-content").mouseleave(function(){
        $(".dropdown-content").css("display","none")
    })

});



