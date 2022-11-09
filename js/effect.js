window.onload = function () {
  "use strict";
  $(document).ready(function () {
    $(".loader").fadeOut(1000, function () {
      $(".slide-left, .slide-right").animate(
        {
          width: "0%",
        },
        500,
        function () {
          $(".loader-con").fadeOut();
        }
      );
    });
  });
};

$(function () {
  "use strict";
  $("#menu").slicknav({
    label: "",
    brand: "Aditya Maurya",
  });
});
// start big slider
$(document).ready(function () {
  "use strict";
  $(".skitter-large").skitter({
    label: false,
    dots: false,
  });
});

$(document).ready(function () {
  "use strict";
  $(".picOne-header").slideDown(1000, function () {
    $(".picOne-btn").fadeIn(1500, function () {
      $(".picOne-header,picOne-btn")
        .delay(50)
        .fadeOut(function () {
          $(".slider-lable").css("background", "rgba(0, 0, 0, 0.8)");
          $(".picTwo-header").fadeIn(1000, function () {
            $(".picTwo-para").show(1500, function () {
              $(".picTwo-btn").fadeIn(500, function () {
                $(".picTwo-header,.picTwo-para,.picTwo-btn")
                  .delay(2800)
                  .fadeOut(function () {
                    if ($(window).width() > 992) {
                      $(".slider-lable").css("background-color", "inherit");
                    }
                  });
              });
            });
          });
        });
    });
  });
});
$(document).ready(function () {
  "use strict";
  setInterval(function () {
    $(".picOne-header").slideDown(1000, function () {
      $(".picOne-btn").fadeIn(1500, function () {
        $(".picOne-header,picOne-btn")
          .delay(50)
          .fadeOut(function () {
            $(".slider-lable").css("background", "rgba(0, 0, 0, 0.8)");
            $(".picTwo-header").fadeIn(1000, function () {
              $(".picTwo-para").show(1500, function () {
                $(".picTwo-btn").fadeIn(500, function () {
                  $(".picTwo-header,.picTwo-para,.picTwo-btn")
                    .delay(2950)
                    .fadeOut(function () {
                      if ($(window).width() > 992) {
                        $(".slider-lable").css("background-color", "inherit");
                      }
                    });
                });
              });
            });
          });
      });
    });
  }, 10500);
});
// end big slider

// start project slider
$(document).ready(function () {
  "use strict";
  $(".center").slick({
    dots: false,
    infinte: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          dots: false,
          infinite: true,
          centerMode: true,
          slidesToShow: 3,
          slideToScroll: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  });
});
// end project slider

// start what people says coding
$(document).ready(function () {
  "use strict";
  $(".people-says").slick({
    dots: false,
    infinte: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          dots: false,
          infinite: true,
          centerMode: true,
          slidesToShow: 3,
          slideToScroll: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  });
});
// end what people says coding

// start page scroll effect
$(document).ready(function () {
  if ($(window).width() > 1024) {
    $(document).scroll(function () {
      var sheight = window.pageYOffset;
      // $(".check").html(sheight);
      if (sheight > 775) {
        $(".about-me,.pic-me").slideDown(1000);
      } else {
        $(".about-me,.pic-me").slideUp(1000);
      }
    });
  }
});

// end page scroll effect

// start scroll to top coding
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
    // $(".scroll-top").click(function () {
    //   $("html, body").animate({ scrollTop: 0 }, 1000);
    // });
  });
});
// end scroll to top coding

$(document).ready(function () {
  if ($(window).width() > 1024) {
    $(".slider-lable").show();
  } else {
    $(".slider-lable").hide();
  }
});
