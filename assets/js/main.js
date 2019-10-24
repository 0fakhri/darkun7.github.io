console.log("Main.JS Connected");
/*===Run===*/

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
  /*===Slider @ User Page===*/
  var current = 1;
  function slider(index){
    var slide = document.getElementsByClassName("slide");
    for (i = 0; i < slide.length; i++) {
        slide[i].classList.remove("current");
    }
    slide[index-1].classList.add("current");
  }


  /*===Page Width===*/
  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  /*===Colapse User===*/
  var userState = true;
  function userColapse(){
    var subUser = document.getElementsByClassName("sub-user");
    if(userState){
      subUser[0].style.display="block";
    }else{
      subUser[0].style.display="none";
    }
    userState = !userState;
  }
