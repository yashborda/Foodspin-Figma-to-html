$('.slider-all').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  cssEase: 'linear',
  pauseOnHover: false,
});

let back_color = ['#FFEEDE', '#EAFFE2', '#FFEEDE', '#EAFFE2', '#FFEEDE', '#EAFFE2', '#FFEEDE', '#EAFFE2', '#FFEEDE', '#EAFFE2'];
let btn_color = ['#FF922C', '#54BF29', '#FF922C', '#54BF29', '#FF922C', '#54BF29', '#FF922C', '#54BF29', '#FF922C', '#54BF29'];
let deg = ['360', '324', '288', '252', '216', '180', '144', '108', '72', '36'];
let i = 0;

$("#prev").click(function () {
  i = i < 9 ? --i : 0;
  $('.back-color').css("background", "" + back_color[i] + "");
  $("#prev ,#next").css("background", "" + btn_color[i] + "");
  $(".circle").css("transform", "rotate(" + deg[i] + "deg)");

  $("#next").removeAttr('disabled');
  if (i === 0) {
    $("#prev").prop('disabled', true);
  }
  $('.slider-all').slick('slickPrev');
});

$("#next").click(function () {
  i = i < 9 ? ++i : 0;
  $('.back-color').css("background", "" + back_color[i] + "");
  $("#prev ,#next").css("background", "" + btn_color[i] + "");
  $(".circle").css("transform", "rotate(" + deg[i] + "deg)");

  $("#prev").removeAttr('disabled');
  if (i === 9) {
    $("#next").prop('disabled', true);
  }
  $('.slider-all').slick('slickNext');
});