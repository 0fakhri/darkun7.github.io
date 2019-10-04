console.log("Main.JS Connected");
  /*===Smooth Scroll===*/
$(document).ready(function(){
$("a").on('click', function(event) {
 if (this.hash !== "") {
   event.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
     scrollTop: $(hash).offset().top
   }, 800, function(){
     window.location.hash = hash;
   });
 }
});
});

  /*===Navbar===*/
var isActive = false;
$('.menu').on('click', function() {
  if (isActive){
    $(this).removeClass('active');
    $('body').removeClass('menu-open');
  } else{
    $(this).addClass('active');
    $('body').addClass('menu-open');
  }
  isActive = !isActive;
});
