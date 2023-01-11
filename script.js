$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // exit out of the menu after clicking on a link
    $('.nav-item').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


})

// document.querySelectorAll('.nav-item').forEach(link=>{
//     link.addEventListener('click', () => {
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     })
// });
