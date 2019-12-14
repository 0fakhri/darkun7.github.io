let dataKota;
// $.get('indonesia.json', async function(data) {
//     dataKota = await data;
// }, 'json')
// $.getJSON("indonesia.json",{}, async function(data)
//     {
//         dataKota = await data;
// });
function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

fetchJSONFile('resource/kota.json', function(data){
    dataKota = data;
});
function showKota(){
    let indexSelected = $('#provinsi').val();
    let listDataKota = dataKota[indexSelected]
    console.log(indexSelected)
    $('#kota').find('option').remove().end().append('<option value="0">- Pilih Kota -</option>')
    $.each(listDataKota, (key, kota) => {
        $.each(kota, (id, val) => {
            $('#kota').append(`<option value="${val}">${val}</option>`)
        })
    })
}
