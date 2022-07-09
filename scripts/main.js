// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

$(document).ready(function(){
  $("#idade").html(((new Date().getFullYear()) -1980) + " ");
});
