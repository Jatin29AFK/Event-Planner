let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');  /*menu p jane k bad cross ka option b aaega*/
    navbar.classList.toggle('active');  /*toggle visibility or apply styles based on whether the element has the 'active' class or not.*/
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
    loop:true,
    autoplay:{
        delay:3000,
        disableonInteraction:false,
    },
  });

  var swiper = new Swiper(".review-slider", {
    slidesPerView:1,
    grabCursor: true,
    loop:true,
    spaceBetween:10,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
        1050:{
            slidesPerView:3,
        },
    },
    autoplay:{
        delay:5000,
        disableonInteraction:false,
    }
  });