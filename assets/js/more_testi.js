let tombol = document.querySelector("#semua");
let testi = document.querySelector("#testimoni");
let content = testi.children[0];
var open = false
var dataTesti
fetchJSONFile('resource/testi.json', function(data){
    dataTesti = data;
});

tombol.addEventListener('click', function(){
    if(!open){
      var i;
      for(i = 1; i <= 3; i++) {
        $("#testi").append(
          `<div class="grid-content col-3">`+
          `<img src="`+dataTesti[i]["img"]+`">
          <p>`+dataTesti[i]["pesan"]+`</p>`+
          `<p style="font-style:italic;">~`+dataTesti[i]["nama"]+`</p>
        </div>`);
      }
      tombol.style.display = "none";
    }


})
