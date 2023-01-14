$(document).ready(function() {
    var currentIndex = 0;
    var images = $("#carousel img");
    var maxIndex = images.length - 1;
  
    $("#prev-button").click(function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : maxIndex;
      images.hide();
      $(images[currentIndex]).show();
    });
  
    $("#next-button").click(function() {
      currentIndex = (currentIndex < maxIndex) ? currentIndex + 1 : 0;
      images.hide();
      $(images[currentIndex]).show();
    });
  });
  