$(document).ready(function () {
  /**** Single Slide Slider  ****/
  $(".banner-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  });
  // $(".testimonial-slider").slick({
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   cssEase: "linear",
  //   pauseOnHover: false,
  // });
  // $(".service-slider").slick({
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 4,
  //   centerMode: true,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 380,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });

  $(".timeline-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    asNavFor: ".timeline-date",
  });
  $(".timeline-date").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".timeline-slider",
    dots: false,
    infinite: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          center: true,
        },
      },
    ],
  });

  // $(".clients-slider").slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 4,
  //   centerMode: true,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   responsive: [
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });
  // $('.timeline-slider').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   infinite: false,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         center: true
  //       }
  //     }
  //   ]
  // });
  /** header Fix **/
  // $(window).scroll(function () {
  //   var topBar = $("header");
  //   if ($(this).scrollTop() > 300) {
  //     topBar.addClass("fixed");
  //   } else {
  //     topBar.removeClass("fixed");
  //   }
  // });
  // $(".toggler").click(function () {
  //   $(".header .nav").slideToggle();
  //   $(this).toggleClass("is-active");
  // });
  // /**** Scroll Top  ****/
  // $(window).scroll(function () {
  //   /* Scroll Top */
  //   var offset = 500;
  //   var duration = 400;
  //   if ($(this).scrollTop() > offset) {
  //     $(".smoth_scroll").fadeIn(duration);
  //   } else {
  //     $(".smoth_scroll").fadeOut(duration);
  //   }
  //   return false;
  // });
  // $(".smoth_scroll").click(function () {
  //   $("html, body").animate({ scrollTop: 0 }, 600);
  // });
  // $('a[href="#"]').bind("click", function (event) {
  //   var $anchor = $(this);
  //   $("html, body")
  //     .stop()
  //     .animate(
  //       {
  //         scrollTop: $($anchor.attr("href")).offset().top - 50,
  //       },
  //       1250,
  //       "easeInOutExpo"
  //     );
  //   event.preventDefault();
  // });
  $("#gallery-1").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  $("#gallery-2").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  // Numbering
});
function openTab(th) {
  window.open(th.name, "_blank");
}

// javascript added
// ======================= COUNTER JAVASCRIPT START ======================
const myNum = document.querySelectorAll(".counter");
let speed = 200;
myNum.forEach((myCount) => {
  let target_count = myCount.dataset.count;
  let init_count = +myCount.innerText;
  let new_increment_num = Math.floor(target_count / speed);

  const updateNumber = () => {
    init_count += new_increment_num;
    myCount.innerText = init_count;

    if (init_count < target_count) {
      setTimeout(() => {
        updateNumber();
      }, 7);
    }
  };

  updateNumber();
});
// ======================= COUNTER JAVASCRIPT END ======================

// j-query added

$(".clients-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".testimonial-slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: false,
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 90) {
    $(".header").addClass("active-header");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active-header");
  }
});
var counted = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".counting").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    counted = 1;
  }
});
/**** Scroll Top  ****/
const scrollTop = document.querySelector(".scroll-top");
let myScrollFunc = function () {
  let y = window.scrollY;
  if (y >= 550) {
    scrollTop.style.opacity = 1;
  } else {
    scrollTop.style.opacity = 0;
  }
};
window.addEventListener("scroll", myScrollFunc);
$(".smoth_scroll").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 700);
});
$(".service-slider").slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 4,
  centerMode: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// =================== TEAM POPUP JAVASCRIPT ===============================

function toggleManojKumarPopup() {
  document.getElementById("team-popup-manoj-kumar-bansal").classList.toggle("team-popup-active")
}
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
      document.getElementById("team-popup-manoj-kumar-bansal").classList.toggle("team-popup-active");
  }
});
function toggleNeeruBansalPopup() {
  document.getElementById("team-popup-neeru-bansal").classList.toggle("team-popup-active")
}
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
      document.getElementById("team-popup-neeru-bansal").classList.toggle("team-popup-active");
  }
});
function toggleDeviDassPopup() {
  document.getElementById("team-popup-devi-dass").classList.toggle("team-popup-active")
}
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
      document.getElementById("team-popup-devi-dass").classList.toggle("team-popup-active");
  }
});
function toggleGurmeetSinghPopup() {
  document.getElementById("team-popup-gurmeet-singh").classList.toggle("team-popup-active")
}
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
      document.getElementById("team-popup-gurmeet-singh").classList.toggle("team-popup-active");
  }
});


// infographic jquery
$(document).ready(function() {
  var bubbleList = $('.bubble-container');
  const bubbleCount = bubbleList.length;
  const degStep = 180 / (bubbleCount - 1);
 
  $('.bubble-container').each((index) => {
   const deg = index * degStep;
   const invertDeg = deg * -1;    

    $(bubbleList[index]).css('transform', `rotate(${deg}deg)`);
    $(bubbleList[index]).css('opacity', `1`);
    $(bubbleList[index]).find('.bubble').css('transform', `rotate(${invertDeg}deg)`);
  }) 
})