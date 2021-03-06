$(window).scroll(function () {
  var pScroll = $(this).scrollTop();
  //jumbotro
  $(".jumbotron img").css({
    transform: "translate(0px, " + pScroll / 25 + "%)",
  });
  $(".jumbotron h1").css({
    transform: "translate(0px, " + pScroll / 2 + "%)",
  });
  $(".jumbotron p").css({
    transform: "translate(0px, " + pScroll / 1.3 + "%)",
  });
  //aboute.top - 90
  if (pScroll > $(".aboute").offset().top - 250) {
    $(".pKiri").addClass("pMuncul");
    $(".pKanan").addClass("pMuncul");
  }
  //projects
  if (pScroll > $(".projects").offset().top - 250) {
    $(".projects .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".projects .thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});
