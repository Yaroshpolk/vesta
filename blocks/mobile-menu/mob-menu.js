$(document).ready(function(){
    let active = false;
 function menu(position) {

            if (active === false){
                $(position + " .mobile-menu").css({ "height":"510px"});
                if (position === ".header"){
                    $(position + " .navbar__block_left, .header .navbar__phone").css("opacity",".4");
                }
                active = true;
                console.log(active);
            } else{
                $(position + " .mobile-menu").css({ "height":"0"});
                if (position === ".header"){
                    $(position + " .navbar__block_left, .header .navbar__phone").css("opacity","1");
                }
                active = false;
                console.log(active);
            }

            return active;
    }

    $(".footer .navbar__menu-ic").click(function (){
        menu(".footer");
    });

    $(".header .navbar__menu-ic").click(function (){
        menu(".header");
    });

})