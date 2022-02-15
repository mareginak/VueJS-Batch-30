// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function startReading(remainingTime, books, index) {
    readBooks(remainingTime, books[index], function(time) {
        const nextBook = index + 1;
        if (nextBook < books.length) {
            startReading(time, books, nextBook);
        }
    });
}

startReading(10000, books, 0);