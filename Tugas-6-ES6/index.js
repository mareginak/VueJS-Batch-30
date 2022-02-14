/* Soal 1
   Rumus Luas dan Keliling Persegi Panjang*/
const  luas = (p,l) => { return p*l;};
const keliling = (p,l) => { return 2*(p+l);};

console.log("Luas persegi adalah " + luas(6,5));
console.log("Keliling persegi adalah " + keliling(6,5));

/*Soal 2
  Template Literal*/
const newFunction = function literal(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName,
      fullName: function(){
        console.log(firstName + " " + lastName)
      }
    }
  }   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 
  
  //Fungsi baru dengan template Literal
  const firstName = "William"
  const lastName = "Imoh"
  
  const theString = `${firstName} ${lastName}`
  console.log(theString)

/* Soal 3
   Metode Destructuring dalam ES6*/
var studentData = {
    nameFirst: 'Muhammad',
    nameLast: 'Iqbal Mubarok',
    address: "Jalan Ranamanyar",
    hobby: "playing football"
};
 
const {nameFirst, nameLast, address, hobby} = studentData

console.log(nameFirst, nameLast, address, hobby)

/*Soal 4
 Array Spreading ES6*/
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined = [...west, ...east]

console.log(combined)

/*Soal 5
  Literal ES6*/ 
const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet 

const after = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`
  console.log(after)