$('#file-tugas').change(function() {
  $('small').remove();
  $('#file-icon').remove();
  $('#prev-img').attr('src','#');
  var img;
  var i = $(this).prev('label').clone();
  var file = $('#file-tugas')[0].files[0];
  let name, width, height,size, type;
  // $(this).prev('label').text(file.name);
  name = file.name;
    $('.prev').append("<small>Nama File: "+name+"</small>");
    type = file.type;
    $('.prev').append("<small>Tipe File: "+type+"</small>");
    size = file.size;
    $('.prev').append("<small>Ukuran: "+size/1000+"kb</small>");
    if(type=="image/jpeg" || type=="image/png" || type=="image/svg" ){
      console.log("gambar");
      img = new Image();
      img.onload = function() {
        width = img.width;
        height = img.height;
        $('.prev').append("<small>Dimensi: "+width+"x"+height+"px</small>");
      };
      img.src = window.URL.createObjectURL(file);
      $('#prev-img').attr('src',window.URL.createObjectURL(file));
    }else if(type == "application/pdf"){
      $('#prev-img').append('<i id="file-icon" class="fas fa-file-pdf" style="font-size: 40pt;"></i>');
    }else if(type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
      $('#prev-img').append('<i id="file-icon" class="fas fa-file-word" style="font-size: 40pt;"></i>');
    }else if(type == "application/vnd.openxmlformats-officedocument.presentationml.presentation"){
      $('#prev-img').append('<i id="file-icon" class="fas fa-file-powerpoint" style="font-size: 40pt;"></i>');
    }else if(type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
      $('#prev-img').append('<i id="file-icon" class="fas fa-file-excel" style="font-size: 40pt;"></i>');
    }else{
      $('#prev-img').append('<i id="file-icon" class="fas fa-file" style="font-size: 40pt;"></i>');
    }
});
