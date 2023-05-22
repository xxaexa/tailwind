$(".circle").click(function () {
  $("#panduan").addClass("hidden");
  $(".circle").toggleClass("show");
  $(".circle").not(this).removeClass("show");
});

$("#portofolio ul li").click(function () {
  const id = $(this).data("id");
  console.log(id);
  if (!$(this).hasClass("active")) {
    $("#portofolio ul li").removeClass("active");
    $(this).addClass("active");
    $("#portofolio .tab-portofolio").addClass("active");

    $("#portofolio .tab-portofolio").hide();
    $(`[data-portofolio=${id}]`).fadeOut().fadeIn();
  }
});
