$(document).ready(function(){
    let flag = 0;
    $(".navbar__menu-ic").click(function (){
        if (flag == 0){
            $(".mobile-menu").css({ "height":"500px"});
            $(".header .navbar__block_left, .header .navbar__phone").css("opacity",".4");
            flag++;
        } else {
            $(".mobile-menu").css({ "height":"0"});
            $(".header .navbar__block_left, .header .navbar__phone").css("opacity","1");
            flag--;
        }
    });
})