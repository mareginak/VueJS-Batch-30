//soal 1 saya senang belajar JAVASCRIPT
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var p1 = pertama.substring(0, 4);
var p2 = pertama.substr(12, 6);
var k1 = kedua.substring(0, 7);
var k2 = kedua.substr(8, 10);
var k3 = k2.toUpperCase();

console.log(p1.concat(" ", p2, " ", k1, " ", k3));

//Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var noPertama = parseInt(kataPertama);
var noKedua = parseInt(kataKedua);
var noKetiga = parseInt(kataKetiga);
var noKeempat = parseInt(kataKeempat);

console.log(noPertama + noKedua * noKetiga + noKeempat);

//Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substr(4, 10);
var kataKetiga = kalimat.substr(15, 3);
var kataKeempat = kalimat.substr(19, 5);
var kataKelima = kalimat.substr(25,6);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);