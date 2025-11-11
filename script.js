$(document).ready(function() {
  $(".bio-card").hide().fadeIn(1000);
  $("header h1").hover(
    function() {
      $(this).css("color", "#ffd700");
    },
    function() {
      $(this).css("color", "#fff");
    }
  );
});
