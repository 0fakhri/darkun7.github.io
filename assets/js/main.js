console.log("Main.JS Connected");
//   /*===Smooth Scroll===*/
// $(document).ready(function(){
// $("a").on('click', function(event) {
//  if (this.hash !== "") {
//    event.preventDefault();
//    var hash = this.hash;
//    $('html, body').animate({
//      scrollTop: $(hash).offset().top
//    }, 800, function(){
//      window.location.hash = hash;
//    });
//  }
// });
// });

  /*===Navbar===*/
  // menu.addEventListener("click", function(){
  var isActive = false;
  function toggleNav(){
    let menu = document.querySelector('.menu');
    let body = document.querySelector('body');
    // var menu = document.getElementsByClassName("menu");
    // var body = document.getElementsByTagName("body");
    // console.log("Signal "+ isActive);
    if (isActive){
      menu.classList.remove("active");
      body.classList.remove("menu-open");
    }else{
      menu.classList.add("active");
      body.classList.add("menu-open");
    }
    isActive = !isActive;
  }
// );
  // Ini Pas Pake Jquery
// $(document).ready(function(){
// var isActive = false;
// $('.menu').on('click', function(event) {
//   if (isActive){
//     $(this).removeClass('active');
//     $('body').removeClass('menu-open');
//   } else{
//     $(this).addClass('active');
//     $('body').addClass('menu-open');
//   }
//   isActive = !isActive;
// });
// });
