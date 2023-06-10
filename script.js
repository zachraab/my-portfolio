$(document).ready(function () {
  let topBtn = $("#top-btn");
  let transform = $(".transform");

  function scrollDown() {
    if (document.documentElement.scrollTop > 20) {
      topBtn.css("display", "block");
    } else {
      topBtn.css("display", "none");
    }
  }
  window.onscroll = scrollDown;

  topBtn.on("click", function () {
    document.documentElement.scrollTop = 0;
  });

  transform.on("click", function (event) {
    $(event.target).css({
      opacity: "0",
      cursor: "default",
      "z-index": "-1",
      transform: "scale(1)",
    });
  });
});
