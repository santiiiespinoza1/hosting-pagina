// jQuery('document').ready(function($){

//     var menuBtn= $('.nav-icon'),
//         menu=$('.navegacion ul'),
//         shopNow = $('.shop-now');

//     if (menu.hasClass('show')){
//     	menu.removeClass('show');
//     }
//     menuBtn.click(function(){
//         if(menu.hasClass('show')){
//             menu.removeClass('show');
//             shopNow.css('display','block');
//         }else{
//             menu.addClass('show');
//             shopNow.css('display','none');
//         }

//     });

// });

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click",function(){
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
const iconMenu = document.querySelector(".icon-menu");
for(let i=0;i<subMenuBtn.length;i++){
    subMenuBtn[i].addEventListener("click",function(){
        if (window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
                iconMenu.removeAttribute("style");
            }else{
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
                iconMenu.style.transform = "rotate(0.5turn)";
            }
            
        }
    });
}



