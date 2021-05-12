$(document).ready(function () {
  let topBtn = $("#top-btn");
  let avatar = $("#avatar");

  avatar.mouseenter(function () {
    avatar.css({
      "box-shadow": "0px 0px 40px 10px black",
      "border-radius": "0",
      transform: "scale(2)",
      "margin-top": "150px",
    });
  });
  avatar.mouseleave(function () {
    avatar.css({
      "box-shadow": "none",
      "border-radius": "150px",
      transform: "scale(1)",
      "margin-top": "0",
    });
  });

  function scrollDown() {
    if (document.documentElement.scrollTop > 20) {
      topBtn.css("display", "block");
      console.log("scrolling");
    } else {
      topBtn.css("display", "none");
    }
  }
  window.onscroll = scrollDown;

  topBtn.on("click", function () {
    document.documentElement.scrollTop = 0;
  });
});
