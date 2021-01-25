$(document).ready(function(){

 function menu(position, active) {

            if (active == false){
                $(position + " .mobile-menu").css({ "height":"510px"});
                if (position === ".header"){
                    $(position + " .navbar__block_left, .header .navbar__phone").css("opacity",".4");
                }
                active = true;

            } else{
                $(position + " .mobile-menu").css({ "height":"0"});
                if (position === ".header"){
                    $(position + " .navbar__block_left, .header .navbar__phone").css("opacity","1");
                }
                active = false;

            }

            return active;
    }

    $(".footer .navbar__menu-ic").click(function (){
        menu(".footer", $(this).data("toggle"));
        $(this).data("toggle", !$(this).data("toggle"));
    });

    $(".header .navbar__menu-ic").click(function (){
        menu(".header", $(this).data("toggle"));
        $(this).data("toggle", !$(this).data("toggle"));
    });

})