$(document).ready(function(){
    // Fade in the title
    $("h1").hide().fadeIn(1000);

    // Add color change on hover
    $("h1").hover(function(){
        $(this).css("color", "#e74c3c");
    }, function(){
        $(this).css("color", "white");
    });
});

