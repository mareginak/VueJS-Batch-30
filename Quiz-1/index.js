// Soal 1
function jumlah_kata(str) {
    return str.trim().split(/\s+/).length;
  }
  
  var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
  var kalimat_2 = " Saya Iqbal"
  var kalimat_3 = " Saya Muhammad Iqbal Mubarok "
  
  console.log(jumlah_kata(kalimat_1));
  console.log(jumlah_kata(kalimat_2));
  console.log(jumlah_kata(kalimat_3));

  // Soal 2
var tanggal = 29
var bulan = 2
var tahun = 2020

function next_date(tanggal, bulan, tahun) {
    var format = {year: 'numeric', month: 'long', day: 'numeric' };
    var tglBaru = new Date(tahun, bulan-1, tanggal+1);
    console.log(tglBaru.toLocaleDateString("id", format));
}

next_date(tanggal , bulan , tahun)  