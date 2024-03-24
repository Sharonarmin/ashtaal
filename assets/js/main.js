// what we do slider
function slider(){
  var swiper = new Swiper(".mySwiper", {
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      autoplay: {
        delay: 4000,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
      }
  });
}
slider()

// projects
let projectBox = document.querySelectorAll(".project-img img");
projectBox.forEach(projectBoxes =>{
  gsap.to(projectBoxes,{
    clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    duration:1,
    ease: "power1.inOut",
    opacity:1,
    scrollTrigger:{
      trigger:projectBoxes,
      scroller:"body",
      start:"top 30%",
    }
  })
})



// green box
var tl = gsap.timeline({
  scrollTrigger:{
    trigger:".about-section",
    scroller:"body",
    start:"top 30%",
  }
})
tl.from('.about-img img',{
  y:100,
  duration:1
})

tl.from('.green-box',{
  height:"0",
  duration:1,
})






$('.slider-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  infinite: true,
  speed: 1000,
  asNavFor: '.slider-thumb',
  arrows: true,
});
$('.slider-thumb').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-content',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,

});

