// Soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
var daftar = daftarHewan.length;
for (var i = 0; i < daftar; i++) {
    console.log(daftarHewan.sort()[i]);
    //Do something
}

// Soal 2
function introduce(data) {
    return `Nama saya ${data.name}, umur saya ${data.age} tahun, alamat saya di ${data.address}, dan saya punya hobby yaitu ${data.hobby}`;
}
 
var data = {
    name : "Regina", 
    age : 27, 
    address : "Jalan Cendana", 
    hobby : "Reading" 
};
 
var perkenalan = introduce(data);
console.log(perkenalan); 

// Soal 3
function hitung_huruf_vokal(nama) {
    var huruf_vokal = 'aiueoAIUEO';
    var hitung_vokal = 0;

    for(var i = 0; i < nama.length; i++) {
        if(huruf_vokal.indexOf(nama[i]) !== -1) {
            hitung_vokal += 1;
        }
    }
    return hitung_vokal;
}

var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");

console.log(hitung_1 , hitung_2) // 3 2

// Soal 4
function hitung(angka) {
    var hasil = -2;

    for (var i = 0; i < angka; i++) {
        hasil += 2;
    }
    return hasil;
}
console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8
console.log( hitung(8) )