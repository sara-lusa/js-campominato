// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre
// compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si
// continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero
// massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte
// che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il
// range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con difficoltà 2=> tra 1 e 50


// Genero 16 numeri casuali tra 1 e 100 e li metto in una array
// dichiaro array
var numeriComputer = [];
for (var i = 0; i <= 16; i++ ) {
  // Genero numero random
  var computerRandom = Math.floor(Math.random() * 100) + 1;
  // push nell'array
  numeriComputer.push(computerRandom);
  console.log(numeriComputer);
}

// Chiedo all'utente di inserire un numero alla volta, fino a un massimo di 84 (100 - 16)
var numeriUtente = [];
while (i <= (100 - 16) && !(numeriComputer.includes(singoloNumeroUtente))) {
  var singoloNumeroUtente = prompt('Inserisci un numero da 1 a 100.');
  // if (insides) {
  //   // si ferma
  // }
  numeriUtente.push(singoloNumeroUtente);
  console.log(singoloNumeroUtente);
  console.log(numeriUtente);
}
// Controllo se il numero è tra quelli generati inizialmente, nel caso termino la partita.

// Comunico il punteggio, il numero di volte che ha inserito un numero consentito
