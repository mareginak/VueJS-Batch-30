//Soal 1
var nilai = 86;

if ( nilai >= 85 ) {
    console.log("A")
} else if (nilai >= 75 & nilai < 85){
    console.log("B")
} else if (nilai >=65 & nilai < 75){
    console.log("c")
} else if (nilai >= 55 & nilai < 65){
    console.log("D")
} else {
    console.log("E")
}


//Soal 2
var tanggal = "4";
var bulan = 7;
var tahun = "1995";

switch(bulan) {
  case 1:  bulan = "Januari"; break;
  case 2:  bulan = "Februari"; break;
  case 3:  bulan = "Maret"; break;
  case 4:  bulan = "April"; break;
  case 5:  bulan = "Mei"; break;
  case 6:  bulan = "Juni"; break;
  case 7:  bulan = "Juli"; break;
  case 8:  bulan = "Agustus"; break;
  case 9:  bulan = "September"; break;
  case 10:  bulan = "Oktober"; break;
  case 11:  bulan = "November"; break;
  case 12:  bulan = "Oktober"; break;
  default: console.log('Masukan angka 1-12');}

console.log(tanggal.concat(" ", bulan, " ", tahun));


//Soal 3
var n = 7;
var pagar = "";
for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    pagar += "#";
  }
  pagar += "\n";
}
console.log(pagar);


//Soal 4
var kata = ["Programming", "Javascript", "VueJS"];
var panjang = kata.length;
var index = 0;
var nomor = 1;
m = 7;
while (nomor <= m) {
    console.log(nomor+" - I love "+kata[index]);
    index+=1;
    nomor+=1;

    if (index == panjang) {
        console.log("===");
        index = 0;
    }
}