// navbar function

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("main-header").classList.add('navbar-scroll');
    document.getElementById("main-header").classList.remove('navbar-first');
    document.querySelector('.brand-img').setAttribute('src','images/logo.png');
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("main-header").classList.remove('navbar-scroll');
    document.getElementById("main-header").classList.add('navbar-first');
    document.querySelector('.brand-img').setAttribute('src','images/logo-transparent-header.png');
    document.getElementById("myBtn").style.display = "none";
  }
}

// show navbar and close navbar functions
let navbarBtn = document.querySelector('.navbar-btn');
let closeNavbarBtn = document.querySelector('.navbar-close-btn');
let navbarMenu = document.querySelector('.navbar-menu');
if(navbarBtn){
    navbarBtn.addEventListener('click', function(){
        navbarMenu.classList.add('show');
    });

    navbarMenu.addEventListener('click', function(e){
      if(e.target.classList.contains('navbar-menu')){
        navbarMenu.classList.remove('show');
      }
    });
}

if(closeNavbarBtn){
    closeNavbarBtn.addEventListener('click', function(){
        navbarMenu.classList.remove('show');
    });
}


// show search menu and close search menu functions
let searchBtn = document.querySelector('.search-btn');
let closeSearchBtn = document.querySelector('.search-close-btn');
let searchMenu = document.querySelector('.search-menu');
if(searchBtn){
    searchBtn.addEventListener('click', function(){
        searchMenu.classList.add('show');
    });

    searchMenu.addEventListener('click', function(e){
      if(e.target.classList.contains('search-menu')
       || e.target.classList.contains('row') 
       || e.target.classList.contains('col-md-8')){
        searchMenu.classList.remove('show');
      }
    });
}

if(closeSearchBtn){
    closeSearchBtn.addEventListener('click', function(){
        searchMenu.classList.remove('show');
    });
}

// scroll to top btn function
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//showcase slider

let sliderImages = document.querySelectorAll(".slide");

if(sliderImages){
  let arrowLeft = document.querySelector("#left-arrow"),
  arrowRight = document.querySelector("#right-arrow"),
  current = 0;
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

// Show prev
function slideLeft() {
  reset();
  current--;

  if(current < 0){
    current = sliderImages.length - 1;
}
  sliderImages[current].style.display = "block";
  
}

// Show next
function slideRight() {
  reset();
  current++;
  if(current == sliderImages.length){
    current = 0;
  }
  sliderImages[current].style.display = "block";

  
}
 function slides() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  };

startSlide();

setInterval(slides, 15000);

}

// function for btn in pricing section

$('.yearly-plans').hide();
$('.yearly-btn').click(function(){
    $('.yearly-plans').fadeIn(1500);
    $('.monthly-plans').hide();
    $('.monthly-btn').removeClass('active');
    $('.yearly-btn').addClass('active');
});
$('.monthly-btn').click(function(){
    $('.monthly-plans').fadeIn(1500);
    $('.yearly-plans').hide();
    $('.yearly-btn').removeClass('active');
    $('.monthly-btn').addClass('active');
});


let aboutShow = document.querySelector('.about-show');
let count = document.querySelectorAll('.count');

// $('.about-show').once({});
$.appear('.about-show'); // It supports optional hash with "force_process" and "interval" keys. Check source code for details.

    // $('<div>test</div>').appear(); // It also supports raw DOM nodes wrapped in jQuery.

    $('.about-show').one('appear', function(event, $all_appeared_elements) {
      // this element is now inside browser viewport

      $('.about-show').html(`
      <div class="d-flex animated zoomIn">
      <div class="text-center">
          <div class="count text-main-2">10</div>
          <h5 class="count-para">Years Of Experience</h5>
      </div>
      <div class="text-center ">
          <div class="count text-main-2">255</div>
          <h5>COMPLETED PROJECTS</h5>
      </div>
      <div class="text-center">
          <div class="count text-main-2">91</div>
          <h5>SATISFIED CUSTOMERS</h5>
      </div>
    </div>

    <script>
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          delay:1000,
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
    </script>
      `);


      // counter function for about us section

      
    });
    $('.about-show').on('disappear', function(event, $all_disappeared_elements) {
      // this element is now outside browser viewport
    });




// testimonial swiper

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // services sectio function
  let services = document.querySelectorAll(".service-preview");
  let serviceCol = document.querySelectorAll('.service-col');

  if(services){
    function servicesReset() {
      for (let i = 0; i < services.length; i++) {
        services[i].style.display = "none";
        serviceCol[i].classList.remove('active');
      }
    }
    
    function startService() {
      servicesReset();
      services[0].style.display = "block";
      serviceCol[0].classList.add('active');
    }

    let service1 = document.querySelector('.service-1');
    let service2 = document.querySelector('.service-2');
    let service3 = document.querySelector('.service-3');
    let service4 = document.querySelector('.service-4');
    let service5 = document.querySelector('.service-5');
  
    service1.addEventListener('click', function(){    
      servicesReset();
      services[0].style.display = "block";
      serviceCol[0].classList.add('active');
    });
  
    service2.addEventListener('click', function(){    
      servicesReset();
      services[1].style.display = "block";
      serviceCol[1].classList.add('active');
    });
  
    service3.addEventListener('click', function(){    
      servicesReset();
      services[2].style.display = "block";
      serviceCol[2].classList.add('active');
    });
  
    service4.addEventListener('click', function(){    
      servicesReset();
      services[3].style.display = "block";
      serviceCol[3].classList.add('active');
    });
  
    service5.addEventListener('click', function(){    
      servicesReset();
      services[4].style.display = "block";
      serviceCol[4].classList.add('active');
    });
  
    startService();
  }


  // some scroll animations

  window.sr = ScrollReveal();

  sr.reveal('.newsletter-img-1',{
    duration:3000,
    origin:'top',
    distance:'300px',
  });

  sr.reveal('.newsletter-img-2',{
    duration:3000,
    origin:'bottom',
    distance:'300px',
  });

  sr.reveal('.plans-img',{
    duration:3000,
    origin:'left',
    distance:'300px',
  });
  