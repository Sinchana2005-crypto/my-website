$(document).ready(function() {
  // Smooth fade-in for the card
  $(".bio-card").hide().fadeIn(1000);

  // Small greeting effect
  $("header h1").hover(
    function() {
      $(this).css("color", "#0056b3");
    },
    function() {
      $(this).css("color", "#007bff");
    }
  );
});
