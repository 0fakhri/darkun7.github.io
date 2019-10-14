// input.onkeypress = function(evt) {
//     evt = evt || window.event;
//     var charCode = evt.which || evt.keyCode;
//     var charStr = String.fromCharCode(charCode);
//     if (/\d/.test(charStr)) {
//         return false;
//     }
// };
var input_fullname = document.getElementById("fullname");
var mime_fullname = document.getElementById("for-fullname");
function fill_fullname() {
  if (input_fullname.value.length<8) {
    mime_fullname.innerHTML = "Nama Langkap minimal terdiri dari 8 karakter.";
  }else {
    mime_fullname.innerHTML = "";
  }
}
var input_email = document.getElementById("email");
var mime_email = document.getElementById("for-email");
function fill_email() {
  if (!(/\S+@\S+/.test(input_email.value))){
    mime_email.innerHTML = "Format email tidak valid.";
  }else{
    mime_email.innerHTML = "";
  }
}
// var input_pswd = document.getElementById("pswd");
// var mime_pswd = document.getElementById("for-pswd");
// var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
// function fill_pswd() {
//   if(!(regex.test(input_pswd.value))){
//     mime_pswd.innerHTML = "Password berisi setidaknya 8 karakter dengan huruf kapital, dan kombinasi simbol.";
//   }else{
//     mime_pswd.innerHTML = "";
//
//   }
// }
var input_pswd = document.getElementById("pswd");
var mime_pswd = document.getElementById("for-pswd");
var regex_lower = new RegExp("^(?=.*[a-z])");
var regex_uper = new RegExp("^(?=.*[A-Z])");
var regex_numeric = new RegExp("^(?=.*[0-9])(?=.{8,})");
var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
function fill_pswd() {
  var text ="Password berisi ";
  if(!(regex_numeric.test(input_pswd.value))){
    text +="setidaknya 8 karakter dan terdapat angka, ";
  }
  if(!(regex_lower.test(input_pswd.value))){
    text +="huruf kecil, ";
  }
  if(!(regex_uper.test(input_pswd.value))){
    text +="huruf kapital. ";
  }
  if(text == "Password berisi "){
    mime_pswd.style.display = "none";
  }else{
    mime_pswd.style.display = "block";
  }

    mime_pswd.innerHTML = text;
}
var input_pswdVerify = document.getElementById("pswdVerify");
var mime_pswdVerify = document.getElementById("for-pswdVerify");
function fill_pswdVerify() {
  if (input_pswd.value!=input_pswdVerify.value) {
    mime_pswdVerify.innerHTML = "Konfirmasi password tidak sesuai.";
  }else{
    mime_pswdVerify.innerHTML = "";
  }
}
