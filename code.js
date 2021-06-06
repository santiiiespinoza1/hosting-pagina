jQuery('document').ready(function($){

    var menuBtn= $('.nav-icon'),
        menu=$('.navegacion ul'),
        shopNow = $('.shop-now');

    if (menu.hasClass('show')){
    	menu.removeClass('show');
    }
    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
            shopNow.css('display','block');
        }else{
            menu.addClass('show');
            shopNow.css('display','none');
        }

    });

});




